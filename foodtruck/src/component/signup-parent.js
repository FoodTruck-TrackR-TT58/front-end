import React, { useState, useEffect } from "react";
import SignupOwner from './owner-signup';
import SignupDiner from './diner-signup';
import schema from "../validation/formSchema";
import axios from "axios";
import * as yup from "yup";

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

export default function User(){
    
    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues); 
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled); 

    const postnewUser = (newUser) => {

        axios
          .post("http://fakeapi.com", newUser)
          .then((res) => {
            setFriends([res.data, ...users]);
            setFormValues(initialFormValues);
          })
          .catch((err) => {
            console.log(err);
          });
      };

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
                (ownedList) => formValues[owned]
            ),
            fav:["truckA", "truckB", "truckC", "truckD"].filter(
                (favList) => formValues[fav]
            ),
        };
        postUser(newUser);
    };

    useEffect(() => {
        getFriends();
    }, []);

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
            setDisabled(!valid);
          });
        }, [formValues]);

        return (
            <div className="container">
              <header>
                <h1>Thank you for creating account with us!</h1>
              </header>
        
              <SignupDiner
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
            </div>
          );
    }
}