import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div className="region-button">
      <Button variant="warning" onClick={() => setCity('')}>Current Location</Button>
      {cities.map((item, index) => (
        < Button variant="warning" key={index} onClick={() => setCity(item)}> {item}</Button>
      ))}
    </div >
  )
}

export default WeatherButton