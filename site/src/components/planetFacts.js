import React from "react"

export default function PlanetFacts({ name, orbit, img, maxTemp }) {
  return (
    <div style={{ textAlign: `center` }}>
      <h1> Greetings Earthling from planet, {name}!</h1>

      <h2>
        {name}'s orbit is {orbit} and the warmest temperature is {maxTemp}
      </h2>

      <img src={img} alt={name} height="250px" />
    </div>
  )
}
