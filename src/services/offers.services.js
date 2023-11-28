import axios from 'axios'

class OffersService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/offers`
        })
    }

    getOffers() {
        return this.api.get('/getAllOffers')
    }

    getOneOffer(Offer_id) {
        return this.api.get(`/getOneOffer/${Offer_id}`)
    }

    // createOffer()
}

const offersService = new OffersService()
export default offersService