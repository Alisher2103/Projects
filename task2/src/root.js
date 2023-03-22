import React, { Component } from "react";
import Button from './Generics/Button/index.jsx';
import Home from "./components/index.jsx";
export const Root = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Home />
            <Button />
            <a style={{marginLeft:'20px',paddingBottom:'20px'}} href="https://github.com/Alisher2103">Github link</a>
        </div>
    )
}