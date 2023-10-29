// validationSchemas.ts
import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Your password is required")
    .min(4, "Your password must contain at least 4 characters")
    .max(60, "Your password must contain at most 60 characters"),
});
