import { useState } from "react"
import { Route } from "react-router-dom"
import OfferDetailRoute from "../OfferDetailRoute/OfferDetailRoute"

const OfferDetailsRoutes = () => {

    const [offers, setOffers] = useState()

    useEffect(() => {
        loadOffers()
    }, [])

    const loadOffers = () => {
        offersService
            .getOffers()
            .then(({ data }) => setOffers(data))
            .catch(err => console.log(err))
    }

    return (
        offers.map((elm) => {
            <Route path={`/companies/details/${elm._id}`} element={<OfferDetailRoute />}></Route>
        })
    )
}

export default OfferDetailsRoutes