import React, { useState, useEffect } from "react";
import SingleStop from "./SingleStop";

export default function FilterData(stops) {
  const [intialStops, setInitialStops] = useState([])
  const [stops, setStops] = useState([])

  useEffect(() => {
    setInitialStops(stops.content);
    setStops(stops.content)
    console.log(stops.content);
  })

  function filterList() {
    const stops = initialStops;
    console.log(stops);
    setStops(stops);
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="Search" onChange={this.filterList} />
      </form>

      <div>
        {this.state.stops.map((stop) => (
          <SingleStop key={stop.id} stop={stop} />
        ))}
      </div>
    </div>
  )
}
