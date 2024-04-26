const user = document.querySelector(".user input")
const submit = document.querySelector(".user button")
const icon = document.querySelector(".icon")
const search = document.querySelector(".search")

const visualcrossingApi = "6RZDFTSMLRM6FPBMAHGMZ826Y";

function checkWeather() {
    city = user.value.trim();
    const besturl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${visualcrossingApi}&contentType=json`
    fetch(besturl)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            document.querySelector(".main-degree").innerHTML = Math.round(data.currentConditions.temp)  + "°C";
            document.querySelector(".city-name").innerHTML = data.resolvedAddress;
            document.querySelector(".wind").innerHTML = data.currentConditions.windspeed + "mph";
            document.querySelector(".humidity").innerHTML = data.currentConditions.humidity + "%";
            document.querySelector(".visibility").innerHTML = data.currentConditions.visibility + " Km";
            document.querySelector(".description").innerHTML = data.description;
            document.querySelector(".conditions-check").innerHTML = data.currentConditions.conditions;
            document.querySelector(".feelslike").innerHTML = "Feels like " + data.currentConditions.feelslike + "°C";
            document.querySelector(".uv-index").innerHTML = data.currentConditions.uvindex;
            document.querySelector(".pressure").innerHTML = data.currentConditions.pressure;
            document.querySelector(".solarradiation").innerHTML = data.currentConditions.solarradiation;
        })
        .catch((error) => console.log(error))
        .finally(() => console.log("Fetching Process Completed"));
}


submit.addEventListener("click", (e)=>{
    e.preventDefault();
    checkWeather();
    user.value = "";
    setTimeout(()=>{
        search.style.display = "block";
    }, 2000)
})
