import { useEffect, useState } from 'react';
import './App.css'
import axios from "axios"
import WeatherCard from './components/WeatherCard';


function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  useEffect(() => {
    const success = pos => {
      const obj = {
        latt: pos.coords.latitude,
        long: pos.coords.longitude
      }
      setCoords(obj)
    }
  
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  useEffect(()=>{
    if(coords){
      const ApiKey = "59839a74ad4806da47292febad8faf30"
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latt}&lon=${coords.long}&appid=${ApiKey}`

      axios.get(url)
        .then(res => {
          setWeather(res.data)
          const obj = {
            celsius: (res.data.main.temp - 273.15).toFixed(1),
            farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32) .toFixed(1)
          }
          setTemp(obj)
        })
      .catch(err => console.log(err))

    }
  },[coords])

  return (
 <div>
    <WeatherCard 
      weather={weather}
      temp={temp}
    />
   
    
    
 </div>
  )
}

export default App
