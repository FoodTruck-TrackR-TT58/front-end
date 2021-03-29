import React, { useState, useEffect } from "react";
import SignupForm from './signup';

const initialFormValues = {
    role: "",
    username: "",
    password: "",
    owned:"",
    email: "",
    address:"",
    fav:""
};

const initialUsers = [];

export default function User(){
    
    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues); 

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
        setFormValues({
            ...formValues,
            [name]: value, 
        });
    };

    const formSubmit = () => {
        const newUser = {
            role: formValues.role.trim(),
            username: formValues.username.trim(),
            password: formValues.password.trim(),
            owned: formValues.owned.trim(),        
            email: formValues.email.trim(),
            address: formValues.address.trim(),
            fav: formValues.fav.trim(),
        
        };
        postUser(newUser);
    };

    useEffect(() => {
        getFriends();
    }, []);

    useEffect(() => {
        return (
            <div className="container">
              <header>
                <h1>Thank you for creating account with us!</h1>
              </header>
        
              <SignupForm
                values={formValues}
                change={inputChange}
                submit={formSubmit}
              />
            </div>
          );
    }
}