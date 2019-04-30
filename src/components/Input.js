import styled from "styled-components";
import { Field } from "formik";
const InputStyle = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const Input = props => {
  const isSubmitting = props.isSubmitting;
  return (
    <Field
      name="username"
      placeholder="Nombre de usuario"
      render={({ field, form: { isSubmitting } }) => (
        <Input {...field} disabled={isSubmitting} type="text" />
      )}
    />
  );
};

export default Input;
