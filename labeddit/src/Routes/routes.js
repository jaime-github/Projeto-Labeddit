import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Login from '../Pages/Login'
import Feeds from '../Pages/Feeds'
import Cadastro from '../Pages/Cadastro'
import Posts from '../Pages/Posts' 

const RoutesApp = () => { 

    return (
            <BrowserRouter>
                <Routes>    
                    <Route path="/" element={<Login/>} />                 
                    <Route path="/feeds" element={<Feeds/>} />                 
                    <Route path="/cadastro" element={<Cadastro/>} />
                    <Route path="/posts" element={<Posts/>} />              
                </Routes>         
            </BrowserRouter>); 
    } 
    
    export default RoutesApp;