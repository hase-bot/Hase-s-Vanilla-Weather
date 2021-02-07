function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let realFeelElement = document.querySelector("#feels-like");
    let descriptionElement = document.querySelector("#description");
    let windElement = document.querySelector("#wind");
    let humidityElement = document.querySelector("#humidity");
    let sunriseElement = document.querySelector("#sunrise");
    let sunsetElement = document.querySelector("#sunset");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    realFeelElement.innerHTML = response.data.main.feels_like;
    descriptionElement.innerHTML = response.data.weather[0].description;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    humidityElement.innerHTML = response.data.main.humidity;
    sunriseElement.innerHTML = response.data.sys.sunrise;
    sunsetElement.innerHTML = response.data.sys.sunset;
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Bucharest&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature); 