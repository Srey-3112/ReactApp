import React from 'react'

export const Employee = ({emp,onDelete}) => {
    return (
        <div>
            <h2>{emp.eId}</h2>
            <h2>{emp.eName}</h2>
            <h2>{emp.eAge}</h2>
           `<button className="btn btn-danger" onClick={()=>{onDelete(emp)}}>DELETE</button>`
        </div>
    )
}
