import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [weather, setWeather] = useState();
  const [search, setSearch] = useState("London");

  // let api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=dd94f859a0e52d6e4767fddf735f04a7`

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=dd94f859a0e52d6e4767fddf735f04a7')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  function handleClick() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=dd94f859a0e52d6e4767fddf735f04a7`,{
      method: 'POST'
    })
    .then(res => res.json())
    .then(data => {
      setWeather(data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <div className="container">
        <div className="weather-card mx-auto w-50 d-flex flex-column gap-3 text-center">
            <h1 className="title">Weather</h1>
            <div className="search">
              <input type="text" placeholder='Enter city name...' onChange={e => setName(e.target.value)} />
              <button onClick={handleClick} className='btn btn-primary'>Send</button>
            </div>
            <div className="info">
              <h2 className="cityName"><span>City name:</span> london</h2>
              <div className="details mx-auto w-50 d-flex flex-column gap-3 text-center">
                <div className="col d-flex gap-3">
                  <p style={{fontWeight: "bold"}}>Humidity:</p>
                  <p className="humidity">16%</p>
                </div>
                <div className="col2 d-flex gap-3">
                  <p style={{fontWeight: "bold"}}>Wind Speed:</p>
                  <p className="wind">15 km/h</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
