import React from 'react'
import { GlobalInfo } from './App'
import { useContext } from 'react'


export const SuperChild = () => {
    const{color}  = useContext(GlobalInfo);
    return (
        <div>
            <h3 style = {{color:color}}>Super child component..</h3>
        </div>
    )
}