import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Please, insert a valid email.')
    .required('The email is required.'),
  password: yup
    .string()
    .min(6, 'The password have to be at least 6 characters long.')
    .required('The password is required.'),
});

export type LoginFormInputs = yup.InferType<typeof loginSchema>;