const API_KEY = `035e72b2d5959ca576028a65b26c5c99`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getweather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return showWeather(data);
};

const showWeather = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = `<h2>City Not Found</h2>`;
    return;
  }
  weather.innerHTML = `
    <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />
        </div>
        <div>
            <h2>${data.main.temp}℃</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `;
};

form.addEventListener("submit", function (e) {
  getweather(search.value);
  e.preventDefault(); //prevents the form from reloading the page
});
