import React from "react"
import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import './App.css'

function RobotDetails (props){

  //const {id, name, userName, email, addressn} = props;
  const [users, setUsers] = useState([]);
  const {id} = useParams();

  const fetchDataDetails = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
      .then((data) => {
        data.map((item) => {
        if(item.id == id) {
          setUsers(item)
        } 
      })             
      })
  }

  useEffect(() => {
    fetchDataDetails()
  }, [])

  console.log(users)
  
  return(
    <>
      <div className="img-items-details" key={users.id} >
        <img src={`https://robohash.org/${users.id}`} />
        <h4>{users.name}</h4>
        <h4>{users?.address?.street}, {users?.address?.suite}, {users?.address?.city}</h4>
        <h4>{users.email}</h4>
        <h4>{users.website}</h4>
      </div>
      <Link className="back-link" to='/'><h5>Back to Home page</h5></Link>
    </>
  )
}

export default RobotDetails