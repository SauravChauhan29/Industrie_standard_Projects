// date part is start 

var displaydate = document.querySelector('#date');

const dates = new Date();
const days = dates.getDay();
const month = dates.getMonth();
const today = dates.getDate();
const daysInWeek =
    ['Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'];
var fullDay = (daysInWeek[days]);
var monthInYear =
    ["Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"];
var fullMonth = (monthInYear[month]);
var fulldate = `${fullDay} | ${fullMonth} | ${today}`
displaydate.innerHTML = fulldate;


// date part is end

// api part is start Hear
const cityname = document.getElementById("city_name")
const citytemp = document.getElementById("tempreture")
const statuss = document.getElementById("skystatus")
const url = 'https://api.openweathermap.org/data/2.5/weather?unit=metric&q='
const key = '&appid=5ee12ca964ea1c29ba78036b8c65bb03'
const inputforsearch = document.getElementById('searchme');
const wind = document.getElementById('wind');
const humidty = document.getElementById('humidity');
const longitude = document.getElementById('Longitude');
const latitude = document.getElementById('Latitude');
const statepng = document.getElementById("wheather_img")
const atmPress = document.getElementById("atm-pre");

async function getWheather(inputforsearch) {
    console.log("Loading......")
    const response = await fetch(url + inputforsearch + key);
    const data = await response.json();
    console.log(url + inputforsearch + key);
    console.log(data.main.temp);
    citytemp.innerHTML = Math.round(data.main.temp - 273.15) + "°C";
    cityname.innerHTML = data.name;
    statuss.innerHTML = data.weather[0].main;
    wind.innerHTML = data.wind.speed + "km/h";
    humidty.innerHTML = data.main.humidity + "%";
    longitude.innerHTML = data.coord.lon;
    latitude.innerHTML = data.coord.lat;
    atmPress.innerHTML = data.main.pressure + " hPa";

    if (data.weather[0].main == "Clouds") {
        statepng.src = "/assets/cloudy.png";

    }
    else if (data.weather[0].main == "haze") {
        statepng.src = "/assets/haze.png";

    }
    else if (data.weather[0].main == "Snow") {
        statepng.src = "/assets/snowy.png";

    }
    else if (data.weather[0].main == "Clouds") {
        statepng.src = "/assets/cloudy.png";

    }
    else if (data.weather[0].main == "Clouds") {
        statepng.src = "/assets/cloudy.png";

    }
    else if (data.weather[0].main == "Clouds") {
        statepng.src = "/assets/cloudy.png";
    }
    else{
        statepng.src = "/assets/clearsky.png";
    }
}
// api part is end Hear
