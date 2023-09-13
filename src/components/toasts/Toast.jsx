'use client'
import React from "react";
import { toast } from "react-toastify"
const Toast = (props) => {
    return toast.error(props.msg, {
        position: "top-center",
        autoClose: 5000,
        draggablePercent: 60,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

}

export default Toast
