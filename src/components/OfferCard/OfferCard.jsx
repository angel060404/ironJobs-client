import { Button, Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import './OfferCard.css'
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

        <Col md={{ span: 6 }} style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="mt-4">
                <Card style={{ marginTop: '30px' }} key={offer._id} className="card">
                    <div style={{ height: '400px' }}>
                        <div className="CardImgCenter">
                            <Card.Img className="CardImg" variant={offer.title} src={offer.imageUrl} />
                        </div>
                        <Card.Body>
                            <Card.Title style={{ height: '20px' }}><h3 style={{ fontSize: '1.3em' }}>{offer.title}</h3></Card.Title>
                            <hr />
                            <Card.Subtitle style={{ height: '20px' }}><h3 style={{ fontSize: '1.2em' }}>{offer.type}</h3></Card.Subtitle>
                            <hr />
                            <Card.Text style={{ height: '50px' }}>
                                {offer.description}
                            </Card.Text>
                            <Card.Text style={{ height: '30px' }}>
                                salary: {offer.salary}€
                            </Card.Text>
                            <hr />
                            <Link className='link' to={`/offer/details/${offer._id}`}>
                                <div className="d-grid gap-2">
                                    <Button variant="dark">
                                        Details
                                    </Button>
                                </div>
                            </Link>
                            {(loggedUser?._id === offer.owner.toString() || loggedUser?.role === 'ADMIN') &&
                                <span className="d-grid gap-2 mt-3" onClick={() => deleteOneOffer(offer._id)}>
                                    <Button className="btn-danger">
                                        Delete
                                    </Button>
                                </span>
                            }
                        </Card.Body>
                    </div>
                </Card>
            </div>
        </Col >
    )
}

export default OfferCard