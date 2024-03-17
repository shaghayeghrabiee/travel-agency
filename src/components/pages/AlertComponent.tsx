import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { alert } from 'react-alert';

interface AlertComponentProps {
  type?: string;
  message?: string;
}
const AlertComponent: React.FC<AlertComponentProps> = ({ type, message }) => {

  useEffect(() => {
    if (type === "success") {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, []);
  return (
    <div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default AlertComponent;
