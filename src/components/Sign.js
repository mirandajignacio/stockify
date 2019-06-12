import { Formik } from "formik";
import signSchema from "../schemas/signSchema";
import Input from "./Input";
import Form from "./Form";
import Papper from "./Papper";
import Button from "./Button";
import styled from "styled-components";
import FullInput from "./FullInput";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  /* margin-left: 12px; */
  /* margin: 0.5em 0; */
  /* position: relative; */
`;

const Sign = () => (
  <Formik
    initialValues={{ username: "", password: "" }}
    validationSchema={signSchema}
    onSubmit={async (values, { setStatus, setSubmitting }) => {
      setStatus(null);
      // Step 1. Request to backend
      // Step 2. Valid user ? redirect : setStatus error
      setTimeout(() => {
        setStatus("Datos invalidos.");
        setSubmitting(false);
      }, 1000);
    }}
  >
    {({
      isSubmitting,
      isValidating,
      status,
      handleChange,
      touched,
      errors,
      values,
      handleBlur,
      handleSubmit
    }) => (
      <Papper>
        <Form onSubmit={handleSubmit}>
          <Label>
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              name="username"
              placeholder="Nombre de usuario"
            />
          </Label>
          {/* {touched.password && errors.password && <p>{errors.password}</p>} */}
          {/* <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            name="password"
            placeholder="Contraseña"
          /> */}

          <FullInput
          touched={touched.password}  
          errors={errors.password}
          onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            name="password"
            placeholder="Contraseña"></FullInput>
          {status ? <p>{status}</p> : null}
          {isValidating ? <p>Validando</p> : null}
          <Button type="submit" disabled={isSubmitting}>
            INGRESAR
          </Button>
        </Form>
      </Papper>
    )}
  </Formik>
);
export default Sign;
