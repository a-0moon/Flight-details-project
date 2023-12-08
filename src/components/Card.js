import React from "react"

function Card(props) {
  const { image, destination, airline, flightNumber, id, details } =
    props.Object;
  function handleClick() {
    document.getElementById("name" + id).classList.toggle("hide")
  }

  return (
    <>
      <div className="flight-card" onClick={handleClick}>
        <img src={image} alt="Newyork" />
        <h2>{destination}</h2>
        <p>Airline: {airline}</p>
        <p>Flight Number: {flightNumber}</p>
      </div>
      <div className="flight-details hide" id={"name" + id}>
        <h2>{destination}</h2>
        <p>Airline: {airline}</p>
        <p>Flight Number: {flightNumber}</p>
        <p>{details}</p>
      </div>
    </>
  )
}

export default Card;














