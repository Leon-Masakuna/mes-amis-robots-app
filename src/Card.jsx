import React from 'react'
import './App.css'

function Card(props) {

  const {robot} = props;

  return(
    <div className="img-items">
      <img src={`https://robohash.org/${robot.id}`} />
      <h3>{robot.name}</h3>
      <h4>{robot.email}</h4>
    </div>
  ) 
}

export default Card;