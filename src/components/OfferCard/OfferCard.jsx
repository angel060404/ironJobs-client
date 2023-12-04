import { Button, Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import './OfferCard.css'

const OfferCard = ({ offer }) => {

    return (

        <Col md={{ span: 6 }} style={{ display: "flex", justifyContent: "space-around" }}>

            <Card style={{ marginTop: '30px' }} key={offer._id} className="card">
                <div style={{ height: '400px' }}>

                    <div className="companyCardImgCenter">
                        <Card.Img className="cardImg" variant={offer.title} src={offer.imageUrl} />
                    </div>
                    <Card.Body>
                        <Card.Title style={{ height: '20px' }}><h3 style={{ fontSize: '1.3em' }}>{offer.title}</h3></Card.Title>
                        <hr />
                        <Card.Subtitle style={{ height: '20px' }}><h3 style={{ fontSize: '1.2em' }}>{offer.type}</h3></Card.Subtitle>
                        <hr />
                        <Card.Text style={{ height: '70px' }}>{offer.description}
                            <p>salary: {offer.salary}€</p>
                        </Card.Text>
                        <hr />
                        <Link className='link' to={`/offer/details/${offer._id}`}>
                            <div className="d-grid gap-2">
                                <Button variant="dark">
                                    Details
                                </Button>
                            </div>
                        </Link>
                    </Card.Body>

                </div>

            </Card>
        </Col >
    )
}

export default OfferCard