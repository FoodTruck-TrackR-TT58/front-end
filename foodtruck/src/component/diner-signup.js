import React from "react";

export default function SignupDiner(props) {

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
        <form className="diner-form container" onSubmit={onSubmit}>        
            <h2>Let's get started</h2>
            <div className="diver-form-group inputs">
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
                <label>
                    Diner's Email
                    <input
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                    />
                </label>
                <label>
                    Diner's Address
                    <input
                        value={values.address}
                        onChange={onChange}
                        name="address"
                        type="text"
                    />
                </label>                
                <h4>Favorite Trucks</h4>
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
                <button disabled={disabled}>Submit!</button>
                <div className="errors">
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                    <div>{errors.email}</div>
                    <div>{errors.address}</div>
                </div>
            </div>
        </form>
    )
}