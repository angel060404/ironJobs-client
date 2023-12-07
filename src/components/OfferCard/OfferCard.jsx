import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import offersService from "../../services/offers.services"

const OfferCard = ({ offer, handleForDelete }) => {

    const { loggedUser } = useContext(AuthContext)

    const deleteOneOffer = (offer_id) => {

        offersService
            .deleteOffer(offer_id)
            .then(() => handleForDelete())
            .catch(err => console.log(err))
    }

    return (
        <Card style={{ marginTop: '30px' }} key={offer._id} className="card">
            <div style={{ height: '400px' }}>
                <div className="CardImgCenter">
                    <Card.Img className="CardImg mt-3" variant={offer.title} src={offer.imageUrl} />
                </div>
                <div className="carBody">
                    <Card.Body>
                        <Card.Title style={{ height: '20px' }}><h3 style={{ fontSize: '1.3em' }}>{offer.title}</h3></Card.Title>
                        <hr />
                        <Card.Subtitle style={{ height: '20px' }}><h3 style={{ fontSize: '1.2em' }}>{offer.type}</h3></Card.Subtitle>
                        <hr />
                        <Card.Text style={{ height: '60px' }}>
                            {offer.description}
                        </Card.Text>
                        <hr />

                        <Card.Text style={{ height: '30px' }}>
                            <span style={{ fontSize: '1.2em', fontWeight: '500' }}>Salary:</span> {offer.salary}€
                        </Card.Text>
                        <hr />
                        <Container>
                            <Row>
                                <Col>
                                    <Link className='link' as={Col} to={`/offer/details/${offer._id}`}>
                                        <div className="d-grid gap-2 mt-2">
                                            <Button variant="dark">
                                                Details
                                            </Button>
                                        </div>
                                    </Link></Col>

                                {(loggedUser?._id === offer.owner.toString() || loggedUser?.role === 'ADMIN') &&
                                    <Col>
                                        <span className="d-grid gap-2 mt-2" as={Col} onClick={() => deleteOneOffer(offer._id)}>
                                            <Button className="btn-danger">
                                                Delete
                                            </Button>
                                        </span>
                                    </Col>
                                }

                            </Row>
                        </Container>
                    </Card.Body>
                </div>
            </div>
        </Card >
    )
}

export default OfferCard