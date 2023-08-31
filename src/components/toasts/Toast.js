import { toast } from "react-toastify"
export const Success=(props)=>{
    console.log(props)
    toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        draggablePercent: 60,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
}
export const Error=(props)=>{
    console.log(props)
    toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        draggablePercent: 60,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
}