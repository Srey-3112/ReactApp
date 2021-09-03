import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { useState } from 'react';
import { EmployeeList } from './MyComponents/EmployeeList';
import { AddEmployee } from './MyComponents/AddEmployee';
import { MainHeader } from './MyComponents/MainHeader'
import { Redirect, Route } from 'react-router-dom';
import { Welcome } from './Pages/Welcome'
import { Product } from './Pages/Product'
import { ProductDetail } from './Pages/ProductDetail'
import { SimpleForm } from './Pages/SimpleForm';
import { UserList } from './api/User-List';
import { UserDetail } from './api/User-Detail';
import { AddUser } from './api/Add-User';
import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


//add validation...

function App() {
    const [users, setusers] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [isError, setisError] = useState(null)


    // function fetchUsers() {


    //     fetch('https://reqres.in/api/users?page=2').then(res => {

    //         return res.json();
    //     }).then(data => {

    //         console.log(data.data[0])
    //         setusers(data.data)
    //     })

    // }


    async function addUser(emp) {



        console.log("stringfy...", JSON.stringify(emp))
        const res = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify(emp),

            headers: {
                'Content-Type': "application/json",
            }
        })
        const data = await res.json();
        toast.success('User added..', {
            position: toast.POSITION.TOP_CENTER
        })
        console.log("res =>", data)
    }

    async function demo(){

        const res = await fetch("https://boni.co.in/v1/businesses")
        const data = await res.json();
        console.log(data)
    }
    async function fetchUsers() {

        setisLoading(true)
        try {
            const res = await fetch('https://reqres.in/api/users?page=2')
            const data = await res.json();
            setusers(data.data)
            setisLoading(false)

            console.log(res.status)
            if (!res.ok) {

                throw new Error('Something went wrong !!!!')
            }

        } catch (error) {

            setisError(error.message)


        }
    }


    return (

        <div>
            <button className="btn btn-info" onClick={fetchUsers}>FETCH USERS</button>
            <button className="btn btn-info" onClick={demo}>demo</button>
            <ToastContainer />
            <Route path="/" exact>
                {isLoading && <p>Loading....</p>}
                {!isLoading && users.length > 0 && <UserList users={users} />}
                {!isLoading && isError && <p>{isError}</p>}

            </Route>
            <Route path="/users/:id">
                <UserDetail />
            </Route>
            <Route path="/adduser">
                <AddUser addUser={addUser} />
            </Route>





        </div>

    )
}

export default App;