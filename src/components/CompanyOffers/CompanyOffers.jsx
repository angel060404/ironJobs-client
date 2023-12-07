import { Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import './CompanyOffers.css'

const CompanyOffers = ({ offer }) => {

    const navigate = useNavigate()

    return (
        <Col md={{ span: 3 }}>
            <div className="companyOffer">
                {offer &&
                    <span onClick={() => navigate(`/offer/details/${offer._id}`)}>
                        <Image className="companyOfferInfo" src={offer.imageUrl} rounded />
                        <p style={{ fontWeight: 'bold' }}>{offer.title}</p>
                    </span>
                }
            </div>
        </Col>
    )
}

export default CompanyOffers