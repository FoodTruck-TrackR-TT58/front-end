import React from "react";
import styled from 'styled-components'

const FormDiv = styled.div`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: royalblue;
    align-items: center;
    display: flex;
    flex-direction: column;

    h2{
        color: darkblue;
    }

    h4{
        color: darkslateblue;
    }

    .inputs{
        display: flex;
        flex-direction: column;
    }

    label{
        padding: 6px 10px;
        margin: 5px;
        display: flex;
        flex-direction: column;
    }
`

const OwnDiv= styled.div`
    display: flex;
    flex-direction: row;

`
const ErrorDiv = styled.div`
    align-items: center;
    color: darkred;
    display:flex;
    justify-content: center;
`

export default function SignupOwner(props) {

    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form className="owner-form container" onSubmit={onSubmit}>
            <FormDiv>       
            <h2>Let's get started</h2>
            <div className="owner-form-group inputs">
                <h4>General Information</h4>
                <label>
                    Username&nbsp;
                    <input
                    value={values.username}
                    onChange={onChange}
                    name="username"
                    type="text"
                    />
                </label>
                <label>
                    Password&nbsp;
                    <input
                    value={values.password}
                    onChange={onChange}
                    name="password"
                    type="text"
                    />
                </label>
                <OwnDiv>
                <h4>Trucks Ownered</h4>
                <label>
                    Truck A
                    <input
                        type="checkbox"
                        name="truckA"
                        checked={values.truckA}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Truck B
                    <input
                        type="checkbox"
                        name="truckB"
                        checked={values.truckB}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Truck C
                    <input
                        type="checkbox"
                        name="truckC"
                        checked={values.truckC}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Truck D
                    <input
                        type="checkbox"
                        name="truckD"
                        checked={values.truckD}
                        onChange={onChange}
                    />
                </label>
                </OwnDiv>
                <button disable={disabled}>Submit!</button>
            </div>
            <ErrorDiv>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </ErrorDiv>
            </FormDiv> 
        </form>
    )
}