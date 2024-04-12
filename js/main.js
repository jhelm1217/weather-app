const apiKey = 'a2a4f091b3d467cec86841f30f893007';

// let icons = [
// "fa-solid fa-sun",
// "fa-solid fa-moon",
// "fa-solid fa-cloud-sun",              
// "fa-solid fa-cloud-moon",              
// "fa-solid fa-cloud",       
// "fa-solid fa-cloud-showers-heavy",         
// "fa-solid fa-cloud-sun-rain",      
// "fa-solid fa-cloud-moon-rain",             
// "fa-solid fa-bolt-lightning",          
// "fa-solid fa-snowflake",       
// "fa-solid fa-smog",
// ];


// console.log('icons', icons)


let city = document.getElementById("city")
// console.log('city', city);

let kelvin = document.getElementById("kelvin")
// console.log('kelvin', kelvin);

let fahrenheit = document.getElementById('fahrenheit')
// console.log('fahrenheit', fahrenheit);

let celsius = document.getElementById("celsius")
// console.log('celsius', celsius);

let condition = document.getElementById('condition')
// console.log('condition', condition);

let icon = document.getElementById('icon');
let image = document.getElementById('image');

let weatherCurrent
let temperature 



const button = document.getElementById("button");
//go get city name from input 



button.addEventListener('click', function() {
// function fetchWeather () {
    let cityInput = document.getElementById('cityInput');
    console.log('cityInput', cityInput.value);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`;

    fetch(apiUrl) 
      .then(response => response.json())
      .then(current => {
        // console.log('current', current);
        weatherCurrent = {
            condition: current.weather[0].main,
            temperature: (current.main.temp),
            fahrenheitTemp: Math.round(current.main.temp - 273.15) * 9/5 + 32,
            celsiusTemp: Math.round(current.main.temp- 273.15),
            city: current.name,
            iconName: current.weather[0].icon,
    
            // wind: current.wind_speed
        }
        // console.log('Weather condition ', weatherCurrent.condition);
        // console.log('temperature', weatherCurrent.temperature);
        // console.log('city ', weatherCurrent.city);
        // console.log('temperature in farenheit', weatherCurrent.farenheitTemp);
        // console.log('temperature in celsius', weatherCurrent.celsiusTemp);
        console.log('weather.current', current)
        // find the html element
        // set the text.content for html element to whatever you want
        condition.textContent = weatherCurrent.condition;
        city.textContent = weatherCurrent.city;
        kelvin.textContent = current.main.temp + ' K';
        fahrenheit.textContent = weatherCurrent.fahrenheitTemp + ' F';
        celsius.textContent = weatherCurrent.celsiusTemp + ' C';
        // image.textContent= icons[weather.current[0].icon];
        const imageSrc = `https://openweathermap.org/img/wn/${weatherCurrent.iconName}@2x.png`;
        image.setAttribute("src", imageSrc);
      }) 
      .catch(error => {
        console.error('error: ', error);
      });
})



// async function showData() {

// }

// button.addEventListener('')




// console.log('Hello World')
// import axios from 'axios'

// function axiosSwanson () {
//     axios.get('url')
//         .then(response => console.log('data: ', response.data))
//         .catch(error => {
//             console.log('error: ', error)
//         })
// }
