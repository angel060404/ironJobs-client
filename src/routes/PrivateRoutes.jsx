import { useContext } from "react"
import { AuthContext } from "../contexts/auth.context"
import { Navigate, Outlet } from "react-router-dom"
import Loader from "../components/Loader/Loader"

const PrivateRoutes = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (!loggedUser) {
        return <Navigate to='/log-in' />
    }


    return <Outlet />
}

export default PrivateRoutes