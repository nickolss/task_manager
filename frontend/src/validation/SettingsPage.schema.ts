import * as yup from "yup";

export const profileSchema = yup.object({
  fullName: yup.string().required("Full name is required."),
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Email is required."),
});

export const passwordSchema = yup.object({
  currentPassword: yup.string().required("Current password is required."),
  newPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters.")
    .required("New password is required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match.")
    .required("Please confirm your new password."),
});

export type ProfileFormInputs = yup.InferType<typeof profileSchema>;
export type PasswordFormInputs = yup.InferType<typeof passwordSchema>;
