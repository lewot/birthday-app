import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards= data.map(item => {
    return (
      <li>
      <Card className="cards_item"
        key= {item.id}
        item= {item}
      />
      </li>
    )
  })


  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <ul className="cards">
        {cards}
      </ul>   
    </div>
  );
}

export default App;
