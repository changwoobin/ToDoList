const API_KEY = "7aac7a4403120d3704a60b9bc33c96b3";

function onGeoOk(position)
{
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weaterContainer = document.querySelector("#weather span:first-child");
        const nameContainer = document.querySelector("#weather span:last-child");
        nameContainer.innerText = data.name;
        weaterContainer.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}
function onGeoError()
{
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);