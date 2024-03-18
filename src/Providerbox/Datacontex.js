
import {  createContext } from 'react'

let Contex=createContext({})

export let Dataprovider=({children})=>{
    let App="pasu"
    return(
        <Contex.Provider value={{
            App

        }}>
            {children}
        </Contex.Provider>

    )
}
export default Contex