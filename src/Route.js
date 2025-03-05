import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import Layout from "./Layout";

export const AppRouter = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
            <Route path="/" element ={<Home />}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}