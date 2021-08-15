import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Employee } from './MyComponents/Employee';
import { EmployeeList } from './MyComponents/EmployeeList';
import { useState } from 'react';
import { AddEmployee } from './MyComponents/AddEmployee';
import { MainHeader } from './MyComponents/MainHeader';
import { Route } from 'react-router-dom';
import { Welcome } from './Page/Welcome';
import { Product } from './Page/Product';
import { ProductDetail } from './Page/ProductDetail';
import { SimpleForm } from './Page/SimpleForm';
import { UserList } from './api/User-List';
import { UserDetail } from './api/User-Detail';

function App() 
{
     const [users, setusers] = useState([])
    function fetchUser()
    {
        fetch('https://reqres.in/api/users?page=2').then(res =>{

        return res.json()
        }).then(data=>{

            // console.log(data.data)
            setusers(data.data)
        })
    }
    return (

        <div className="container">
           <button onClick={fetchUser} >getUser</button>
           <Route path="/" exact>
            <UserList users={users}/>
            </Route>
            <Route path="/users/:id">
            <UserDetail/>
            </Route>
        </div>

    )
}
export default App;
