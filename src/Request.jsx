import React, { useEffect, useState } from 'react'
import './App.css'
import {Link} from "react-router-dom"
import Search from "./Search"
import Card from "./Card"

function Request() {
  //state (état, données)
  const [users, setUsers] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  //behavior (comportement, event)
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => {
        setUsers(user);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  //affichage (render)
  return (
    <div>
      <Search 
        value={searchTitle} onChange={setSearchTitle}
      />
      {users.length > 0 && (
        <div className="img-preview">
          {users.filter((value) => {
            if (searchTitle.length < 3) {
              return value
            } else if (
                value.name.toLowerCase()
                .includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          }).map((user, index) => (
            <Link className="robot-link" to={`/details/${user.id}`} >
            <Card key={index} robot={user} />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
export default Request;