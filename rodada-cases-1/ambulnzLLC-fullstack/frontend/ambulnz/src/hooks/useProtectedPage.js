import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
    const token = window.localStorage.getItem('token')

    if(!token) {
        alert('You must be logged in to access this page!')
        goToLoginPage(navigate)
    }
    }, [])
}