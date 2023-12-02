import axios from 'axios'

class OffersService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/offers`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getOffers() {
        return this.api.get('/getAllOffers')
    }

    getOneOffer(Offer_id) {
        return this.api.get(`/getOneOffer/${Offer_id}`)
    }

    createOffer(Offer_body) {
        return this.api.post(`/saveOffer`, Offer_body)
    }
}

const offersService = new OffersService()
export default offersService