import { Col, Row } from "react-bootstrap"
import OfferCard from "../OfferCard/OfferCard"


const OffersList = ({ offers, handleForDelete }) => {
    console.log(offers)
    return (<div className="mt-4">
        <Row>
            {offers.map((elm) => {
                return (
                    <Col md={{ span: 6 }} style={{ display: "flex", justifyContent: "space-around" }}>
                        <OfferCard key={elm._id} offer={elm} handleForDelete={handleForDelete} />
                    </Col>)
            })}</Row>

    </div>
    )
}

export default OffersList