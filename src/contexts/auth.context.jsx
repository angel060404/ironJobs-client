import { createContext, useEffect, useState } from "react";
import authService from "../services/auth.services";

const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [loggedUser, setLoggedUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const autheticateUser = () => {
        const token = localStorage.getItem('authToken')

        if (token) {
            authService
                .verify(token)
                .then(({ data }) => {
                    setLoggedUser(data.loggedUser)
                    setIsLoading(false)
                })
                .catch(err => console.log(err))
        }
    }

    const logOut = () => {
        localStorage.removeItem('authToken')
        setLoggedUser(null)
        setIsLoading(false)
    }

    useEffect(() => {
        autheticateUser()
    }, [])

    return (
        <AuthContext.Provider value={{ loggedUser, autheticateUser, logOut, isLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }