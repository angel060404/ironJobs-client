import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/auth`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    signUp(userData) {
        return this.api.post('/sign-up', userData)
    }

    logIn(userData) {
        return this.api.post('/log-in', userData)
    }

    verify(authToken) {
        return this.api.get('/verify',
            { headers: { Authorization: `Bearer ${authToken}` } }
        )
    }
    findById(userId) {
        return this.api.get(`/${userId}`)
    }

}

const authService = new AuthService()

export default authService