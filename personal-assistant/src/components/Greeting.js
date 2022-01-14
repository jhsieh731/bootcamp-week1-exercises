import React, { useEffect, useState } from 'react'
import { Header, Paragraph } from '../styles'

const Greeting = () => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=boston&appid=886705b4c1182eb1c69f28eb8c520e20")
      const data = await res.json()
      setWeather({ desc: data.weather[0].description, feelsLike: data.main.feels_like })
    }
    fetchData()
  }, [])

  const degreesF = weather?.feelsLike ? ((weather?.feelsLike - 273.15) * 9 / 5 + 32).toFixed(2) : 'N/A'
  // const weather_feelslike = weather && weather.main && weather.main.feels_like || '';
  return (
    <div>
      <Header>
        Welcome!
      </Header>
      <Paragraph>
        Local Weather: {weather?.desc || 'N/A'}
      </Paragraph>
      <Paragraph>
        Feels like: {degreesF}°F
      </Paragraph>
      {/* <p>{weather?.main?.feels_like}</p> */}
    </div>
  )
}

export default Greeting;