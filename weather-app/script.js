const apiKey = `489412d89fb246979d875406240302`;
let city;

const errorDiv = document.querySelector(".weather-error-container");
let errorField = null;
let weatherImg = null;

class Weather {
    constructor(city, region, country, localtime, temp_c, temp_f, wind_kph, wind_mph, humidity, condition, iconUrl, aqi) {
        this.city = city;
        this.region = region;
        this.country = country;
        this.localtime = localtime;

        this.temp_c = temp_c;
        this.temp_f = temp_f;
        this.wind_kph = wind_kph;
        this.wind_mph = wind_mph;
        this.humidity = humidity;
        this.condition = condition;
        this.iconUrl = iconUrl;
        this.aqi = aqi;
    }
}

document.getElementById("search_button").addEventListener("click", () => {
    city = document.getElementById("search_field").value;
    errorDiv.style.display = "none";

    if (!city) {
        displayError("Enter a value in the search field to continue.");
    }
    else {
        errorDiv.style.display = "none";
        fetchData();
    }
})

async function fetchData() {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        const {
            "location": { "name": city, region, country, localtime },
            "current": { "temp_c": temp_c, "temp_f": temp_f, "wind_kph": wind_kph, "wind_mph": wind_mph, "humidity": humidity,
                "condition": { "text": condition, "icon": iconUrl },
                "air_quality": { "gb-defra-index": aqi } } } = data;

        let weather = new Weather(city, region, country, localtime, temp_c, temp_f, wind_kph, wind_mph, humidity, condition, iconUrl, aqi);

        displayWeather(weather);
    }
    catch (err) {
        displayError("404 - City not Found. try again!", err);
    }
}

function displayWeather(weather) {
    document.querySelector(".weather-container").style.display = "flex";

    const cityName = document.getElementById("city_name");
    const regionName = document.getElementById("region_name");
    const countryName = document.getElementById("country_name");
    const time = document.getElementById("localtime");

    const temp_c = document.getElementById("temp_c");
    const temp_f = document.getElementById("temp_f");
    const wind_kph = document.getElementById("wind_kph");
    const wind_mph = document.getElementById("wind_mph");
    const humidity = document.getElementById("humidity");
    const aqi = document.getElementById("aqi");
    const condition = document.getElementById("condition");

    cityName.textContent = weather.city;
    regionName.textContent = weather.region;
    countryName.textContent = weather.country;
    time.textContent = weather.localtime;

    temp_c.textContent = weather.temp_c;
    temp_f.textContent = weather.temp_f;
    wind_kph.textContent = weather.wind_kph;
    wind_mph.textContent = weather.wind_mph;
    humidity.textContent = weather.humidity;
    condition.textContent = weather.condition;
    aqi.textContent = weather.aqi;

    if (weatherImg === null) {
        weatherImg = document.createElement("img");
        weatherImg.src = weather.iconUrl;
        document.querySelector(".w-container-2").prepend(weatherImg);
    }

    weatherImg.src = weather.iconUrl;
}

function displayError(message, err) {
    document.querySelector(".weather-container").style.display = "none";

    if (errorField === null) {
        errorField = document.createElement("p");
        errorField.classList.add("error_display");
        errorDiv.appendChild(errorField);
    }

    errorField.textContent = message;
    errorDiv.style.display = "flex";

    throw new Error(err || message);
}