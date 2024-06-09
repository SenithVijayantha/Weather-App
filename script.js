const apiKey = "f7eeac15eb824b525bff85d0e65eff3e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
var data = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "img/images/clouds.png"
} 
else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "img/images/clear.png"
}
else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "img/images/rain.png"
}
else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "img/images/drizzle.png"
    }
    else {
        weatherIcon.src = "img/images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
