import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Employee } from './MyComponents/Employee';
import { EmployeeList } from './MyComponents/EmployeeList';
import { createContext, useState } from 'react';
import { AddEmployee } from './MyComponents/AddEmployee';
import { MainHeader } from './MyComponents/MainHeader';
import { Route } from 'react-router-dom';
import { Welcome } from './Page/Welcome';
import { Product } from './Page/Product';
import { ProductDetail } from './Page/ProductDetail';
import { SimpleForm } from './Page/SimpleForm';
import { UserList } from './api/User-List';
import { UserDetail } from './api/User-Detail';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Child } from './Child';

export const GlobalInfo = createContext();

function App() 
{
    const [myColor, setMyColor] = useState('blue')


    return (
        
        
        <GlobalInfo.Provider value ={{color:myColor}}>
            <h1 style={{ color: myColor }}>App js</h1>
            <Child/>
        </GlobalInfo.Provider>

        // <div>
        //     <SearchMovie />
        // </div>

    )
}
export default App;