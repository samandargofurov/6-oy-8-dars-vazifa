import { useEffect } from 'react';
import './App.css'

function App() {

  useEffect(() => {

  })

  function handleClick(e) {
    e.preventDefault();
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=london&appid=dd94f859a0e52d6e4767fddf735f04a7', {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
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
            <input type="text" placeholder='Enter city name...' />
            <button onClick={handleClick} className='btn btn-primary'>Send</button>
          </div>
          <div className="info">
            <h2 className="cityName"><span>City name:</span> Tashkent</h2>
            <div className="details mx-auto w-50 d-flex flex-column gap-3 text-center">
              <div className="col d-flex gap-3">
                <p style={{fontWeight: "bold"}}>Humidity:</p>
                <p className="humidity">50%</p>
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
