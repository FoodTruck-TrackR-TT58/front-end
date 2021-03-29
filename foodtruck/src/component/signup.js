import React from "react";

export default function SignupForm(props) {
  const { values, submit, change } = props;

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
      <form className="form container" onSubmit={onSubmit}>
        <div className="form-group submit">
            <h2>Let's get started</h2>
            <div className="form-group inputs">
                <label>
                    Diner
                    <imput
                        type="radio"
                        name="role"
                        value="diner"
                        checked={values.role ==="diner"}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Food Truck Owner
                    <imput
                        type="radio"
                        name="role"
                        value="owner"
                        checked={values.role ==="owner"}
                        onChange={onChange}
                    />
                </label>
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
                    Trucks Ownered (Diner please skip!)
                    <select onChange={onChange} value={values.owned} name="owned">
                        <option value="">- Owner select an option -</option>
                        <option value="tacoa">Taco A</option>
                        <option value="tacob">Taco B</option>
                        <option value="tacoc">Taco C</option>
                        <option value="tacod">Taco D</option>
                    </select>
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
                <label>
                    Diner's Favorite Trucks
                    <select onChange={onChange} value={values.fav} name="fav">
                        <option value="">- Diner please select an option -</option>
                        <option value="tacoa">Taco A</option>
                        <option value="tacob">Taco B</option>
                        <option value="tacoc">Taco C</option>
                        <option value="tacod">Taco D</option>
                    </select>
                </label>

            </div>

            <button>submit</button>
        </div>

      </form>
  )
}