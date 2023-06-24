const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

const search = document.querySelector('#search');

const btn = document.querySelector('#btn');

const weather = document.querySelector('#weather');

const getWeather = async (city) => {

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(API);

    console.log(response);

    const data = await response.json();

    console.log(data);

    return showWeather(data);

}

const showWeather = (data) => {

    console.log(data)

    weather.innerHTML = `
    <div class="image"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></div> 
    <div class="location">${data.name}</div>
    <div class="temperature">${Math.floor(data.main.temp)} °C</div>
    <div class="condition">${data.weather[0].main}</div>
    <div class="details">
      <div class="humidity">Humidity: ${data.main.humidity}%</div>
      <div class="wind-speed">Wind Speed: ${data.wind.speed} km/h</div>
    </div>
    `;
}

window.addEventListener('load', async () => {
    const defaultCity = 'Kolkata';
    const defaultWeather = await getWeather(defaultCity);
    showWeather(defaultWeather);
  });

btn.addEventListener(
    'click',
    function(event){
        getWeather(search.value);
        event.preventDefault();
    }
)