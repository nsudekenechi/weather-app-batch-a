let input = document.querySelector("#search-con input");
let loc = document.querySelector("#location p");
const temp = document.querySelector("#temp h1 span");
const temp_min = document.querySelector("#temp-min span span")
const temp_max = document.querySelector("#temp-max span span")
const pressure = document.querySelector("#pressure")
const wind = document.querySelector("#wind")
const humidity = document.querySelector("#humidity");
const dateElement = document.querySelector("#date");
const date = new Date();

input.onblur = async function () {
    if (input.value.length >= 3) {
        let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=a58815bef08444b467fa01dfcee43a50&units=metric`);
        let resp = await req.json();
        loc.innerHTML = `${resp.name}, ${resp.sys.country}`;
        temp.innerHTML = Math.round(resp.main.temp);
        temp_min.innerHTML = Math.round(resp.main.temp_min);
        temp_max.innerHTML = Math.round(resp.main.temp_max);
        pressure.innerHTML = resp.main.pressure;
        humidity.innerHTML = resp.main.humidity;
        wind.innerHTML = resp.wind.speed;
    }
}

dateElement.innerHTML = date.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "numeric"
})

navigator.geolocation.getCurrentPosition(async function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a58815bef08444b467fa01dfcee43a50&units=metric`);
    let resp = await req.json();
    loc.innerHTML = `${resp.name}, ${resp.sys.country}`
    temp.innerHTML = Math.round(resp.main.temp)
    temp_min.innerHTML = Math.round(resp.main.temp_min)
    temp_max.innerHTML = Math.round(resp.main.temp_max)
    pressure.innerHTML = resp.main.pressure
    humidity.innerHTML = resp.main.humidity
    wind.innerHTML = resp.wind.speed
})