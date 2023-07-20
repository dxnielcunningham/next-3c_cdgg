"use client"
import React from "react"
import "./login.css"
import { register } from "../../services/firebase/auth";
import {stack, TextField} from "@mui/material"

export default function Register() {

    const [state, setState] = React.useState({
        email: "",
        password: ""
    });
    
    function onChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        setState({
            ...state,
            [name]: value
        })
    }

    function onRegister(event) {
        event.preventDefault();
        
        // const email = state.email;
        // const password = state.password;

        const {email, password, displayName} = state;

        const args = {
            email,
            password,
            displayName
        }

        register(args);
    }

    return (
        <stack>
            <form onSubmit={onRegister}>

                <stack 
                    direccion="column" 
                    spacing={1} 
                    width={"300px"} 
                    sx={{
                        width: {
                            "sm" : "100%",
                            "md" : "50%",
                            "lg" : "25%",
                            "xl" : "300px"
                        }
                    }}
                    p={2}
                >

                <TextField
                    name = "email" 
                    onChange = {onChange} 
                    value = {state.email} 
                    placeholder = "email" 
                    type = "text" 
                    required 
                    variant = "outlined" 
                />

                <TextField 
                    name="password" 
                    onChange={onChange} 
                    value={state.password} 
                    placeholder="123456" 
                    type="password" 
                    required
                    variant = "outlined" 
                />

                <TextField
                    name="displayName" 
                    onChange={onChange} 
                    value={state.dasplayName} 
                    placeholder="tu nombre" 
                    type="text" 
                    required
                    variant = "outlined" 
                />

                <button type="submit">Register</button>

                
                </stack>
            </form>
            
        </stack>
    )

}