const url = 'https://api.openweathermap.org/data/2.5/';
const key = '409d12d1d35488a6e21ac2a7e8d4ca40';

const setQuery = (e) => {
  if (e.keyCode == 13) {
    getResult(searchBar.value);
  }
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  console.log(query);
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult)
    .catch((error) => {
      console.error('Error fetching the weather data:', error);
    });
};

const displayResult = (result) => {
  if (result.cod === '404') {
    alert('Şehir bulunamadı!');
    return;
  }
  console.log(result);
  document.querySelector('.city').innerText = `${result.name}, ${result.sys.country}`;
  document.querySelector('.temp').innerText = `${Math.round(result.main.temp)}°C`;
  document.querySelector('.desc').innerText = result.weather[0].description;
  document.querySelector('.minmax').innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;
};

const searchBar = document.getElementById('searchbar');
searchBar.addEventListener('keypress', setQuery);

 
 