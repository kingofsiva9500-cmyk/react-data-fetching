import React from 'react'
import '../index.css';
const Card = (prop) => {
  return (
    <div>
       
    
     <div className="container" id="userContainer">
      <div className='card'>
          <h3>{prop.user.name}</h3>
            <p><strong>Email:</strong>{prop.user.email} </p>
            <p><strong>Phone:</strong>{prop.user.phone}</p>
            <p><strong>City:</strong>{prop.user.address.city}</p>
            <p><strong>Company:</strong>{prop.user.company.name}</p>
            </div>
    </div>
    </div>
   
  )
}

export default Card