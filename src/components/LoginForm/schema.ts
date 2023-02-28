import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("Enter your username"),
  password: yup.string().required("Enter your password"),
});

export default schema;
