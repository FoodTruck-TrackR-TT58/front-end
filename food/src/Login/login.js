import React from "react"
import "./login.css"
import styled from "styled-components"


const Bg = styled.div`
    flex-direction:column;
    background: moccasin;
    justify-content:center;
    
`;

const Head = styled.div`
    display:flex;
    justify-content: center;
`;


export default function Login() {

    return(
        <Bg className="bg">
            <Head className="head">
                <h1>Food Truck TrackR</h1>
            </Head>
            <div className="Container">
                <div className="flavor-text">
                    <h3>Sign In</h3>
                </div>
                <div className="input-container">
                    <label>
                    Username
                        <input 
                        name="username"
                        type="text"
                        placeholder="Username here"
                        />
                    </label>
                    <label>
                        Password
                        <input 
                        name="password"
                        type="text"
                        placeholder="Enter password"
                        />
                    </label>
                    <div>
                        <label>
                            Type of Account
                            <select name="accountType">
                                <option value="diner">Diner(default)</option>
                                <option value="operator">Operator</option>
                            </select>
                        </label>
                        <button className="login">Log In</button>
                        <button className="signUp">Sign Up</button>
                    </div>                    
                </div>               
            </div>
        </Bg>                  
    )
}