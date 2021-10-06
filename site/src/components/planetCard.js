import * as React from "react"
import * as cardStyles from "./planetCard.module.css"
import Button from "./button"
import planets from "./data/planets"

const PlanetCard = () => {
  return (
    <div className={cardStyles.container}>
      {planets.map(planet => {
        const { img, name } = planet
        return (
          <div className={cardStyles.card} key={name}>
            <img src={img} alt={name} className={cardStyles.image} />

            <Button
              className={cardStyles.title}
              text={`Visit ${name}`}
              to="#"
            />
          </div>
        )
      })}
    </div>
  )
}
export default PlanetCard
