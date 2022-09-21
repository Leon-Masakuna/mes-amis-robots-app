import React, {useState} from 'react'
import "./App.css"

function Search (props) {
  //Properties
  const {value, onChange} = props;

  //Render
  return(
    <>
      <input 
        className="input" 
        type="text" 
        placeholder="Rechercher par nom"
        name="search"
        value={value}
        onChange={(e)=>onChange(e.target.value)}
      />  
    </>
  )
}

export default Search;