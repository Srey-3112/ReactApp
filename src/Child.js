import React from 'react'
import { GlobalInfo } from './App'
import { useContext } from 'react'
import { SuperChild } from './SuperChild'

export const Child = () => {
   const {color} =  useContext(GlobalInfo)
    return (
        <div>
            <h2 style={{color:color}}>CHILD Component</h2>
            <SuperChild/>
        </div>
    )
}