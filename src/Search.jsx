import React, {useState} from 'react'
import "./App.css"

function Search () {
  //State (données)
  const [searchTitle, setSearchTitle] = useState("");

  //Comportements

  //Render
  return(
    <div>
      <input className="input" type="text" placeholder="Rechercher par nom"
        onChange={(e)=>setSearchTitle(e.target.value)}/>
        
    </div>
  )
}

export default Search;