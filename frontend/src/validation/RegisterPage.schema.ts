import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup.string().required('Name is required.'),
  email: yup
    .string()
    .email('Please enter a valid email.')
    .required('Email is required.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters.')
    .required('Password is required.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match.')
    .required('Please confirm your password.'),
});

export type RegisterFormInputs = yup.InferType<typeof registerSchema>;