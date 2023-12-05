import OfferCard from "../OfferCard/OfferCard"


const OffersList = ({ offers, handleForDelete }) => {

    return (
        offers.map(elm =>
            <OfferCard key={elm._id} offer={elm} handleForDelete={handleForDelete} />
        )
    )
}

export default OffersList