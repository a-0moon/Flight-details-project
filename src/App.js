import React from "react"
import NewyorkPhoto from "./assets/images/newyork.png"
import LosAnglesPhoto from "./assets/images/los-angles.png"
import WashigtonPhoto from "./assets/images/washington-dc.png"
import Card from "./components/Card"

// Mock data for flights
export const flightsData = [
  {
    id: 1,
    airline: "Airline A",
    flightNumber: "AB123",
    destination: "New York",
    image: NewyorkPhoto,
    details:
      "Flight AB123 operated by Airline A to New York. Departure at 9:00 AM from Airport X.",
  },
  {
    id: 2,
    airline: "Airline B",
    flightNumber: "XY456",
    destination: "Los Angeles",
    image: LosAnglesPhoto,
    details:
      "Flight XY456 operated by Airline B to Los Angeles. Departure at 12:30 PM from Airport Y.",
  },
  {
    id: 3,
    airline: "Airline D",
    flightNumber: "XW431",
    destination: "Washigton DC",
    image: WashigtonPhoto,
    details:
      "Flight XW431 operated by Airline D to Washigton DC. Departure at 11:00 PM from Airport Y.",
  },
  // Add more flights as needed
]


function App() {
  return (
    <div className="app" id="app">
      <header>
        <h1>Flight List</h1>
      </header>
      <div className="flight-list">
        {flightsData.map((flight, index) => (
          <Card key={index} Object={flight} />
        ))}
      </div>
    </div>
  )
}

export default App;




