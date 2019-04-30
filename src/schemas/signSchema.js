const { object, string, number, date } = require("yup");

const signSchema = object({
  username: string().required("Requerido"),
  password: string().required("Requerido")
});

export default signSchema;
