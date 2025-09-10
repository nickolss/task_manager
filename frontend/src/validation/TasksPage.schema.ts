import * as yup from "yup";

export const taskSchema = yup.object({
  title: yup.string().required("Title is required."),
  subject: yup.string().required("Subject is required"),
  status: yup
    .string()
    .oneOf(["Pending", "In Progress", "Completed"])
    .required("Status is required."),
  priority: yup
    .string()
    .oneOf(["Low", "Medium", "High"])
    .required("Priority is required."),
});

export type TaskFormInputs = yup.InferType<typeof taskSchema>;
