import './App.css';
import React, { useState, useEffect } from "react";
import SignupOwner from './component/owner-signup';
import SignupDiner from './component/diner-signup';
import schema from "./validation/diner-formSchema";
import axios from "axios";
import * as yup from "yup";
import styled from 'styled-components'

const WrapperDiv = styled.div`
  padding: 6px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: royalblue;
  align-items: center;
  display: flex;
  flex-direction: column;

  h1{
    color: rosybrown;
  }
`

const initialFormValues = {
    role: "",
    username: "",
    password: "",
    email: "",
    address:"",
    truckA: false,
    truckB: false,
    truckC: false,
    truckD: false
};

const initialFormErrors = {
    username: "",
    password: "",
    email:"",
    address:""
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled); 

  const postNewUser = (newUser) => {

    axios
      .post("http://fakeapi.com", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    const inputChange = (name, value) => {
      yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
        ...formErrors,
        [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
        ...formErrors,
        [name]: err.errors
        })
      })
      setFormValues({
        ...formValues,
        [name]: value, 
      });
    };
  

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),     
      email: formValues.email.trim(),
      address: formValues.address.trim(),
      owned:["truckA", "truckB", "truckC", "truckD"].filter(
        (ownedList) => formValues[ownedList]
      ),
      fav:["truckA", "truckB", "truckC", "truckD"].filter(
        (favList) => formValues[favList]
      ),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <WrapperDiv className="container">
      <header>
        <h1>Thank you for creating account with us!</h1>
      </header>
        
      <SignupDiner
        className="signupform"
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <SignupOwner
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </WrapperDiv>
  );
}


export default App;
