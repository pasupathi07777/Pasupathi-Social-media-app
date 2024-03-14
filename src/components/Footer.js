import React from 'react'

const Footer = () => {
   let date= new Date()

    
  return (
   <div>
     <p>Copyrights  &copy; {date.getFullYear()}</p>
   </div>
  )
}

export default Footer