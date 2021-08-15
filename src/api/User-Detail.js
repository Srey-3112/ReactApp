import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
export const UserDetail = () => {

    const [user, setuser] = useState('')
    const params = useParams();
    const style={
        width: "18rem"
    }
    function fetchUser() {
        fetch(`https://reqres.in/api/users/${params.id}`).then(res => {

            return res.json()
        }).then(data => {

            // console.log(data.data)
            setuser(data.data)
        })
    }

    return (
        <div class="card" style={style}>
            <img class="card-img-top" src={user.avatar} />
                <div class="card-body">
                    <h5 class="card-title">{user.first_name} </h5>
                    <p class="card-text">{user.last_name}</p>
                    <p class="card-text">{user.email}</p>
                    <button onClick={fetchUser} className="btn btn-success">Get User</button>
                </div>
        </div>
        )
}
