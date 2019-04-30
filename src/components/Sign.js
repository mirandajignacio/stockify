import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import signSchema from "../schemas/signSchema";
import styled from "styled-components";

const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const Sign = () => (
  <div>
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={signSchema}
      onSubmit={async (values, { setStatus, setSubmitting }) => {
        setStatus(null);
        // Request to backend
        setTimeout(() => {
          setStatus("Datos invalidos.");
          setSubmitting(false);
        }, 1000);
        // Valid user ? redirect : setStatus error
      }}
    >
      {({ isSubmitting, isValidating, status, touched }) => (
        <Form>
          {console.log("touched", touched)}
          <Field
            name="username"
            render={({ field, form: { isSubmitting } }) => (
              <Input {...field} disabled={isSubmitting} type="text" />
            )}
          />
          <ErrorMessage name="username" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          {status ? <p>{status}</p> : null}
          <button type="submit" disabled={isSubmitting}>
            INGRESAR
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
export default Sign;
