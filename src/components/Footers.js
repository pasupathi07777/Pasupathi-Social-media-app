import React from 'react'

const Footers = () => {
   let date= new Date()

    
  return (
   <div className='footers'>
     <p>Copyrights  &copy; {date.getFullYear()}</p>
   </div>
  )
}

export default Footers