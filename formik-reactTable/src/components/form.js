import React from "react";
import { Formik, useFormik } from "formik";

const initialValues = {
  name: "Hardik",
  email: "",
  address: "",
};
const onSubmit = (values) => console.log(values);
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required Name";
  }
  if (!values.email) {
    errors.email = "Required email";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "The email format provided is not valid";
  }
  if (!values.address) {
    errors.address = "Required addredd";
  }
  return errors;
};
const Form = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log(formik.values.name);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label for="name">First name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && <div>{formik.errors.name}</div>}
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <div>{formik.errors.email}</div>}

        <label for="Address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        {formik.errors.address && <div>{formik.errors.address}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
