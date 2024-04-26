
const user = document.querySelector(".user input")
const submit = document.querySelector(".user button")

const apikey = "96082c37a80ee20714b6e25064007904";

function checkWeather() {
    city = user.value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector(".main-degree").innerHTML = Math.round(data.main.temp)  + "°C";
            document.querySelector(".city-name").innerHTML = data.name + ", " + data.sys.country;
            document.querySelector(".wind").innerHTML = data.wind.speed + "mph";
            // document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            // document.querySelector(".airquality").innerHTML = data.main.humidity + "%";
            
        })
        .catch((error) => console.log(error))
        .finally(() => console.log("Fetching Process Completed"));
}


submit.addEventListener("click", (e)=>{
    e.preventDefault();
    checkWeather();
    user.value = "";
})
