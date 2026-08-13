

import Car from "./Car";
import Garage from "./Garage";
function App() {

  let y=10;
  let x=[2014,2015,2022];
  let mod=["Petrol","Hybrid"];
  let time=["Mon","Tues","Wed","Thurs","Fri","Sat"];


  return (
    <div>
      <h1>
        result is {(y)>10 ? "It is greater than 10": "it is not greater than 10"}
      </h1>
      <hr></hr>
      <Car color="white" name="Mustag" version="GT" year={1999}/>
      <hr></hr>
      <Garage model={x} engine={mod} time={time}/>
    </div>
  )
}

export default App
