import { useContext, useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import offersService from '../../services/offers.services'
import OffersList from '../../components/OffersList/OffersList'
import { AuthContext } from '../../contexts/auth.context'
import OfferModalForm from '../../components/OfferModalForm/OfferModalForm'

const OffersPage = () => {

    const [offers, setOffers] = useState()

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);


    useEffect(() => {
        loadOffers()
    }, [])

    const loadOffers = () => {
        offersService
            .getOffers()
            .then(({ data }) => setOffers(data))
            .catch(err => console.log(err))
    }

    const handleForDelete = () => {
        loadOffers()
    }

    const { loggedUser } = useContext(AuthContext)

    return (
        <div className="OffersPage">
            <Container className='mt-3'>
                <OfferModalForm onhide={handleClose} show={showModal} loadOffers={loadOffers} setShowModal={setShowModal} />
                <h1>Offers List</h1>
                {
                    loggedUser.role === 'OWNER' && <Button variant="dark" onClick={handleShow}>Create an Offer</Button>
                }
                <hr />
                <Row>
                    {
                        !offers ? <h2>cargando...</h2> : <OffersList offers={offers} handleForDelete={handleForDelete} />
                    }</Row>
            </Container>
        </div>
    )
}

export default OffersPage