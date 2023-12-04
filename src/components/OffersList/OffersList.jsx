import OfferCard from "../OfferCard/OfferCard"


const OffersList = ({ offers }) => {

    return (
        offers.map(elm =>
            <OfferCard offer={elm} />
        )
    )
}

export default OffersList