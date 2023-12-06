import { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import offersService from '../../services/offers.services'
import Loader from '../../components/Loader/Loader'
import './OfferDetailsPage.css'
import { AuthContext } from '../../contexts/auth.context'
import OfferEditModal from '../../components/OfferEditModal/OfferEditModal'
import OfferAplicants from '../../components/OfferAplicants/OfferAplicants'
import authService from '../../services/auth.services'
import MapMarker from '../../components/MapMarker/MapMarker'

const OfferDetailsPage = () => {

    const [offer, setOffer] = useState()
    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState()

    const { offer_id } = useParams()
    const { loggedUser } = useContext(AuthContext)

    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)

    useEffect(() => {
        loadOffer()
        loadUser()
    }, [])

    const loadUser = () => {
        authService
            .findById(loggedUser._id)
            .then(({ data }) => {
                setUser(data)
            })
            .catch(err => console.log(err))
    }

    const subscribeUser = () => {

        offersService
            .subscribeUser(offer_id, { user_id: loggedUser._id })
            .then(() => loadOffer())
            .catch(err => console.log(err))
    }

    const loadOffer = () => {

        offersService
            .getOneOffer(offer_id)
            .then(({ data }) => {
                setOffer(data)
            })
            .catch(err => console.log(err))
    }

    const unSubscribeUser = () => {

        offersService
            .unSubscribeUser(offer_id, { user_id: loggedUser._id })
            .then(() => loadOffer())
            .catch(err => console.log(err))
    }

    return (
        <div className="OfferDetails">
            <Container>
                <OfferEditModal onhide={handleClose} show={showModal} loadOffer={loadOffer} offer={offer} setShowModal={setShowModal} />
                <Row>
                    {offer ?
                        <h1>Details of the offer: {offer.title}</h1> :
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
                                        <h2>Occupation: {offer.occupation}</h2>
                                        <h3>Duration: {offer.duration}</h3>
                                    </Col>
                                    <Col>
                                        <h3>Type: {offer.type}</h3>
                                    </Col>
                                </Row>
                                <Container className='description'>
                                    <Row>
                                        <h4><p className='description'>Description:</p><p className='description'>{offer.description}</p></h4>
                                        <h5> <p className='description'>Salary: {offer.salary}€</p></h5>
                                        <p>
                                            {(loggedUser?._id === offer.owner || loggedUser?.role === 'ADMIN') &&
                                                <span className="d-grid gap-2 mt-3" onClick={handleShow}>
                                                    <Button variant='info'>
                                                        Edit Offer
                                                    </Button>
                                                </span>
                                            }

                                            {loggedUser?.role === 'USER' && (
                                                <>
                                                    {!offer?.applicants.some(applicant => applicant._id === loggedUser?._id) && (
                                                        <span className="d-grid gap-2 mt-3" onClick={subscribeUser}>
                                                            <Button variant='info'>
                                                                Suscribe to Offer
                                                            </Button>
                                                        </span>
                                                    )}
                                                    {offer?.applicants.some(applicant => applicant._id === loggedUser?._id) && (
                                                        <span className="d-grid gap-2 mt-3" onClick={unSubscribeUser}>
                                                            <Button variant='info'>
                                                                Unsubscribe from the offer
                                                            </Button>
                                                        </span>
                                                    )}
                                                </>
                                            )}</p>

                                    </Row>



                                </Container>
                                <hr />
                                <Container>

                                    <h4>Applicants:</h4>
                                    <Row>
                                        {user && offer.applicants && offer.applicants.length > 0 && offer.applicants.map((elm) => (
                                            <OfferAplicants key={elm._id} applicant={elm} offer={offer} user={user} loadOffer={loadOffer} />
                                        ))}</Row>
                                </Container>


                            </>}
                    <hr />
                    <div style={{ marginBottom: '50px' }}>
                        <MapMarker offer={offer} />
                    </div>
                </div>

            </Container>

        </div>
    )
}

export default OfferDetailsPage