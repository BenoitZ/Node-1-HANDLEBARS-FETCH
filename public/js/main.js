//Fichier JS pour le front-end

// `Le nom de la ville est ${location.name}. Le pays est la ${location.country}. Il fait ${current.temperature}°, le ressenti est de ${current.feelslike}° parce que le temps est ${current.weather_descriptions[0]}.`

const myForm = document.getElementById("myForm");
const myLocation = document.getElementById("myLocation");
const weatherData = document.getElementById("weatherData");

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/weather?location=${myLocation.value}`)
    .then(res => res.json())                       
    .then(data => {
        const { location, feelslike, country, temperature, weather_descriptions } = data;

        weatherData.innerHTML = `Le nom de la ville est ${location}. Le pays est la ${country}. Il fait ${temperature}°, le ressenti est de ${feelslike}° parce que le temps est ${weather_descriptions}.`;


    });
});