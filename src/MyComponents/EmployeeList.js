import React from 'react'
import { Employee } from './Employee'

export const EmployeeList = (props) => {
    return (
        <div className="container">
            <h3 className="text-center">Employee List</h3>
            {
                props.employeelist.length<= 0 ? "No Employee Found" :
                props.employeelist.map((employee)=>{

                    return <Employee emp={employee} key={employee.eId} onDelete={props.onDelete}/>
                })
            }
            {/* <Employee emp={props.employeelist[0]}/> */}
        </div>
    )
}
