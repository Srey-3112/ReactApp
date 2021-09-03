import React from 'react'
import { useState } from 'react'

export const AddUser = (props) => {

    const [name, setname] = useState('')
    const [job, setjob] = useState('')

    const submit = (e) => {

        e.preventDefault();
        var emp = {

            name: name,
            job: job
        }
        props.addUser(emp)

    }
    return (
        <form onSubmit={submit}>
            <div class="form-group">
                <label for="name">NAME</label>
                <input type="text" class="form-control" placeholder="Enter name" onChange={(e) => { setname(e.target.value) }} />
            </div>
            <div class="form-group">
                <label for="job">Job</label>
                <input type="text" class="form-control" placeholder="Enter job" onChange={(e) => { setjob(e.target.value) }} />
            </div>


            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}