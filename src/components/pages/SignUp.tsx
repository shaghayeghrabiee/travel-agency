import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import useSubmit from "../hook/useSubmit";
import { Input } from "../customComponent/Input";
import { Button } from "../customComponent/Button";
import AlertComponent from "./AlertComponent";
import "../../index.css";

const SignUp = () => {
  const { response, submit } = useSubmit();
  const [showAlert, setShowAlert] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      submit(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Must be at least 8 characters"),
    }),
  });

  useEffect(() => {
    if (response) {
      console.log(response.type);
      setShowAlert(true);
      if (response.type === "success") {
        formik.resetForm();
        setTimeout(() => setShowAlert(false), 5000); // Hide alert after 5 seconds
      }
    }
  }, [response]);

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col md:w-1/3 lg:w-1/3 w-1/2 gap-4 justify-center items-center h-full bg-color3/90 md:mt-32 lg:mt-32 my-32 md:mb-8 lg:mb-8 mx-auto md:py-20 lg:py-20 py-8 md:rounded-2xl lg:rounded-2xl rounded-xl signWidth"
      >
        <Input
          containerClass="relative"
          inputClass="h-full border-xl p-2 rounded-lg w-full"
          placeholder="First name..."
          type="text"
          {...formik.getFieldProps("firstName")}
        />
        {formik.errors.firstName && (
          <span className="text-color2">{formik.errors.firstName}</span>
        )}
        <Input
          containerClass="relative"
          inputClass="h-full border-xl p-2 rounded-lg w-full"
          placeholder="Last name..."
          type="text"
          {...formik.getFieldProps("lastName")}
        />
        <Input
          containerClass="relative"
          inputClass="h-full border-xl p-2 rounded-lg w-full"
          placeholder="Email..."
          type="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <span className="text-color2">{formik.errors.email}</span>
        )}
        <Input
          containerClass="relative"
          inputClass="h-full border-xl p-2 rounded-lg w-full"
          placeholder="Password..."
          type="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <span className="text-color2">{formik.errors.password}</span>
        )}
        <Button className="outline-none border-none w-1/3 lg:px-7 p-3 bg-color2 text-white font-extralight rounded-lg hover:bg-gradient-to-tr hover:from-color1 hover:to-color2 signUpButton" type="submit">
          Sign Up
        </Button>
      </form>
      {showAlert && (
        <AlertComponent type={response?.type} message={response?.message} />
      )}
    </>
  );
};

export default SignUp;
