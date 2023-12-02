import { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import offersService from '../../services/offers.services'
import Loader from '../../components/Loader/Loader'
import './OfferDetailsPage.css'

const OfferDetailsPage = () => {

    const { offer_id } = useParams()

    const [offer, setOffer] = useState()

    useEffect(() => {
        loadOffer()
    }, [])

    const loadOffer = () => {
        offersService
            .getOneOffer(offer_id)
            .then(({ data }) => setOffer(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                {offer ?
                    <h1>Details of the offer:{offer.title}</h1> :
                    <Loader />}
                <hr />
            </Row>
            <div className="offerInfo">
                {
                    !offer ?
                        <Loader />
                        :
                        <>
                            <Row >
                                <Col md={{ span: 4 }}>
                                    <Image src={offer.imageUrl} alt={offer.title} className="offerImg" thumbnail />
                                </Col>
                                <Col>
                                    <h2>{offer.occupation}</h2>
                                    <h3>Duration: {offer.duration}</h3>
                                </Col>
                                <Col>
                                    <h3>Type: {offer.type}</h3>
                                </Col>
                            </Row>
                            <Container className='description'>
                                <Row>
                                    <h4><p className='description'>Description:</p><p className='description'>{offer.description}</p></h4>
                                    <p className='description'><h5>Salary: {offer.salary}€</h5></p>
                                </Row>



                            </Container>
                        </>
                }
            </div>
        </Container>
    )
}
//TODO MAPS Y APPLICANTS
export default OfferDetailsPage