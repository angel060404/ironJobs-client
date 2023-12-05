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

    deleteOffer(offer_id) {
        return this.api.delete(`/deleteOffer/${offer_id}`)
    }

    editOffer(offer_id, offer_body) {
        return this.api.put(`/updateOffer/${offer_id}`, offer_body)
    }

    subscribeUser(offer_id, user_id) {
        return this.api.put(`/subscribeUser/${offer_id}`, user_id)
    }

    unSubscribeUser(offer_id, user_id) {
        console.log('HOLLALALALALALALALALALALALAL', user_id)

        return this.api.put(`/unSubscribeUser/${offer_id}`, user_id)
    }
}

const offersService = new OffersService()
export default offersService