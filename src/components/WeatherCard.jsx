import React, { useState } from 'react'
const WeatherCard = ({weather, temp}) => {

const [isCelcius, setIsCelcius] = useState(true)

const handleChangeTemp = () => setIsCelcius(!isCelcius)
  
 
  return (
    <article className='target'>
      <h1 className='article-h1'>Weather App</h1>
      <h2 className='article-h2'>{weather?.name}, {weather?.sys.country}</h2>
      <div className='div-dad'>
        <div>
          <img 
          src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
          alt="" 
          />
        </div>  
        <section>
          <h3 className='div-h3'>"{weather?.weather[0].description}" </h3>
          <ul className='div-ul'>
            <li className='ul-li'><span>wind speed </span> <span className='span-li'>{weather?.wind.speed} m/s </span></li>
            <li className='ul-li'><span>clouds</span> <span className='span-li'>{weather?.clouds.all}</span> %</li>
            <li className='ul-li'><span>pressure </span><span className='span-li'>{weather?.main.pressure} hPa</span></li>
          </ul>
        </section>
      </div>
      <h2 className='div-h2'>{isCelcius ? `${temp?.celsius} ºC` : `${temp?.farenheit} ºF`} </h2>
      <button className='div-button' onClick={handleChangeTemp}>{isCelcius ? "Change to ºF" : "Change to ºC"}</button>
    </article>
  )
}

export default WeatherCard