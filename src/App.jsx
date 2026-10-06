import React, { useEffect, useState } from 'react'
import Card from './components/Card'


const App = () => {
   
     const [users , setUsers]= useState([])

   useEffect(()=>{
    async function fetchUser() {
      const report = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await report.json();
      setUsers(users);
        
      }
      fetchUser();
  },[])
  return (
    <div className='card-container'>
        <div className='head'>
            <h2>User List</h2>

        </div>
        <div className='container'>
      
         {
          users.map((user)=>{
          return  <Card key={user.id} user={user} />
          })
         }
        </div>
       
    </div>
  )
}

export default App