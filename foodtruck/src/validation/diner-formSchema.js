import * as yup from "yup";

export default yup.object().shape({
    username: yup
        .string()
        .required("Username is required")
        .min(3, "Username must be 3 chars long"),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be 6 chars long"),
    email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
    address: yup
        .string()
        .required("Address is required"),
    truckA: yup.boolean(),
    truckB: yup.boolean(),
    truckC: yup.boolean(),
    truckD: yup.boolean(),
});