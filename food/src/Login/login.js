import React from "react"
import "./login.css"
import styled from "styled-components"


const Bg = styled.div`
    background: url("https://cdn.pixabay.com/photo/2016/12/18/09/05/trees-1915245_1280.jpg");
    border:7px solid black;
    border-radius:10px;
    border:;
    max-width:100%;
    margin-right:30%;
    margin-left:30%;
    margin-top:5%;
    margin-bottom:15%;
    font-size:150%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`;

const Head = styled.div`
    display:flex;
    justify-content: center;
    font-size:300%;
    padding: 2.5%;
`;

const Span = styled.span`
    color:#60ff5a;
`;


const Flav = styled.div`
    display: flex;
    justify-content:center;
    padding:1%;
    font-size: 175%;
`;

const Fields = styled.div`
padding:1%;
`;

const Sign = styled.div`
    display:flex;
    padding:1%;
`;

const Type = styled.div`

`;

const Select = styled.select`
    display:flex;
    justify-content:center;
    margin-left:auto;
    margin-right:auto;
    margin-top:5%;
    margin-bottom:5%;
`;

const LogIn = styled.div`
    
`;

const Button = styled.button`
    display: inline-block;
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
    display: block;
    background:transparent;
`;

const Create = styled.div`
    font-size:175%;
`;

const FormSelect = styled.div`
    display:flex;
    justify-content:center;
`;

const FormButtons = styled(Button)`

`;

export default function Login() {

    return(
        <Bg className="bg">
            <Head className="head">
                <h1>Food Truck Track<Span>R</Span></h1>
            </Head>            
            <Flav className="flavor-text">
                <h3>Sign In</h3>
            </Flav>
            <Fields className="inputContainer">
                <label>
                Username
                    <input
                    name="username"
                    type="text"
                    placeholder="Username here"
                    />
                </label>
            </Fields>
            <Sign>  
                <label>
                    Password
                    <input 
                    name="password"
                    type="text"
                    placeholder="Enter password"
                    />
                </label>
            </Sign>
            <Type>
                <label>
                    <h4>Type of Account</h4>
                    <Select name="accountType">
                        <option value="diner">Diner(default)</option>
                        <option value="operator">Operator</option>
                    </Select>
                </label>
            </Type>
            <LogIn>
                <Button className="login" type="button">Log In</Button>
            </LogIn>
            <Create>              
                <h3>Create Account</h3>
            </Create> 
            <FormSelect>
                <FormButtons className="operator">Operator sign up</FormButtons>
                <FormButtons className="diner">Diner sign up</FormButtons> 
            </FormSelect>
                              
        </Bg>             
    )
}