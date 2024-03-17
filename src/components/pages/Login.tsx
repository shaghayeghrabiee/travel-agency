import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Input } from "../customComponent/Input";
import { Button } from "../customComponent/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../index.css";
const Login = () => {
  const [error, setError] = useState(false);
  const success = () => {
   const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));
   toast.promise(resolveAfter3Sec, {
     pending: "Your data is being checked!",
     success: "You logged 👌",
     error: "Promise rejected 🤯",
   });
  }
  const errorFinding = () => {
    (formik.touched.email && formik.errors.email) ||
    (formik.touched.password && formik.errors.password)
      ? setError(true)
      : setError(false);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      formik.resetForm();
      success();
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Must be at least 8 characters"),
    }),
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col md:w-1/3 lg:w-1/3 w-1/2 gap-4 justify-center items-center h-full bg-color3/90 md:mt-32 lg:mt-32 mt-16 mx-auto md:py-32 lg:py-32 py-8 md:rounded-2xl lg:rounded-2xl rounded-xl"
    >
      <Input
        containerClass="relative"
        inputClass="h-full border-xl p-2 rounded-lg w-full"
        placeholder="Your email..."
        type="email"
        {...formik.getFieldProps("email")}
      />
      {error && <span className="text-color2">{formik.errors.email}</span>}
      <Input
        containerClass="relative"
        inputClass="h-full border-xl p-2 rounded-lg"
        type="password"
        {...formik.getFieldProps("password")}
      />
      {error && <span className="text-color2">{formik.errors.password}</span>}
      <Button
        onClick={errorFinding}
        className="outline-none border-none w-1/3 lg:px-7 px-5 py-3 bg-color2 text-white font-extralight rounded-lg hover:bg-gradient-to-tr hover:from-color1 hover:to-color2"
      >
        Login
      </Button>
      <ToastContainer theme="dark" />
    </form>
  );
};

export default Login;
