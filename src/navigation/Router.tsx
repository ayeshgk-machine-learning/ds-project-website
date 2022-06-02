import React from "react";
import { BrowserRouter,Route, Routes,Link } from "react-router-dom";

import { RequireAuth } from "./RequireAuth";

import Login from "../views/Login";
import _404 from "../views/_404";
import  Home  from "../views/Home";
import Predict from "../views/Predict";


const Router = ({handleLogout}) => {
    return (
        <BrowserRouter>
        <Routes>
            
            <Route path="/*" element={<_404 />} />
            {/* <Route path="about" element={<About />} /> */}
            <Route path = '/login' element ={<Login/>}/>
            <Route path="/" 
                element={
                    <RequireAuth>
                        <Home handleLogout={handleLogout}/>
                    </RequireAuth>} 
            />
            <Route path="/predict" 
                element={
                    <RequireAuth>
                        <Predict/>
                    </RequireAuth>} 
            />
        </Routes>
        </BrowserRouter>
    );};
    
export default Router;
