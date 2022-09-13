import React, { useEffect, useState } from 'react'
import './App.css'

function Request() {
  //state (état, données)
  const [users, setUsers] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  //behavior (comportement, event)
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
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
      <input className="input" type="text" placeholder="Rechercher par nom"
        onChange={(event) => setSearchTitle(event.target.value)} />
      {users.length > 0 && (
        <div className="img-preview">
          {users.filter((value) => {
            if (searchTitle.length < 3) {
              return value
            } else if (value.name.toLowerCase().includes(searchTitle.toLowerCase())) {
              return value;
            }
          }).map(user => (
            <div className="img-items" key={user.id} >
              <img src={`https://robohash.org/${user.id}`} />
              <h3>{user.name}</h3>
              <h4>{user.email}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Request;