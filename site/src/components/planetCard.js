import * as React from "react"
import * as cardStyles from "./planetCard.module.css"
import Button from "./button"
import planets from "./data/planets"

const Fact = props => {
  return <p className="info"> {props.children} </p>
}

const PlanetCard = () => {
  return (
    <div className={cardStyles.container}>
      {planets.map(planet => {
        const { img, name, orbit, maxTemp } = planet
        return (
          <div className={cardStyles.card} key={name}>
            <img src={img} alt={name} className={cardStyles.image} />

            <p className={cardStyles.title}>{name} </p>
            <hr />
            <Fact> Orbit | {orbit || "TBD"} </Fact>
            <Fact> Max Temp | {maxTemp || "TBD"}</Fact>
            <Button text="Learn More" to="#" />
          </div>
        )
      })}
    </div>
  )
}
export default PlanetCard
