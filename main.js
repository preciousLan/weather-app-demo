
var darkBtn = document.getElementById('dark-btn');

darkBtn.onclick = function () {
   darkBtn.classList.toggle('dark-btn-off');
   document.body.classList.toggle('white-theme')

   if (localStorage.getItem('theme') == 'light') {

      // If it's light, change it to dark
      localStorage.setItem('theme', 'dark');
   }
   else {
      // Otherwise, change it to light
      localStorage.setItem('theme', 'light');
   }


}


if (localStorage.getItem("theme") == "light") {

   document.body.classList.add('white-theme');
   darkBtn.classList.add('dark-btn-off');
}
else if (localStorage.getItem("theme") == "dark") {
   darkBtn.classList.remove('dark-btn-0ff');
   document.body.classList.remove('white-theme');

}
else {
   localStorage.setItem('theme', 'light');
}



const apiKey = "204b96b517bf7d5421f25460f0c5e4df";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";


const searchBtn = document.querySelector('.search button');
const searchBox = document.querySelector('.search input');

async function checkWeather(city) {

   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
 
   if (response.status == 404) {
      document.querySelector('.error').style.display = "block";
      document.querySelector('.weather').style.display = "none";
   }
   else {
      document.querySelector('.error').style.display = "none";

      const data = await response.json();
     
     
      const weatherIcon = document.querySelector('.weather-icon');
   
      document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector('.city').innerHTML = data.name;
      document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
      document.querySelector('.wind').innerHTML = data.wind.speed + "km/hr";
   
      if (data.weather[0].main == "Clouds") {
         weatherIcon.src = "images/clouds.png"
      }
      else if (data.weather[0].main == "Clear") {
         weatherIcon.src = "images/clear.png"
      }
      else if (data.weather[0].main == "Rain") {
         weatherIcon.src = "images/rain.png"
      }
      else if (data.weather[0].main == "Drizzle") {
         weatherIcon.src = "images/drizzle.png"
      }
      else if (data.weather[0].main == "Mist") {
         weatherIcon.src = "images/mist.png"
      }
   
   
      document.querySelector('.weather').style.display = "block";
   
   
   }

  



}

searchBtn.addEventListener('click', () => {
   checkWeather(searchBox.value);

})

