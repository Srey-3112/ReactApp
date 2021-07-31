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



function App() 
{
 
  return (
    
   <div>
     <MainHeader/>
     <Route path="/Welcome">
       <Welcome/>
     </Route>
     <Route path="/Product">
       <Product/>
     </Route>
     <Route path="/ProductDetail/:ProductId/:ProductName">
       <ProductDetail/>
     </Route>

   </div>
  );
}

export default App;
