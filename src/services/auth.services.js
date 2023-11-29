import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/auth`
        })
    }

    signUp(userData) {
        return this.api.post('/sign-up', userData)
    }

    logIn(userData) {
        return this.api.post('/log-in', userData)
    }

}

const authService = new AuthService()

export default authService