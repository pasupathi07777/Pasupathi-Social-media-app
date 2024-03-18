import React from 'react'
import { useContext } from 'react'
import Contex from '../Providerbox/Datacontex'

const Header = ({app_name}) => {
  let {App}=useContext(Contex)
  return (
    <div className='header'>{App}</div>
  )
}

export default Header