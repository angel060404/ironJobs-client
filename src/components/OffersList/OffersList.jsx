import { Button, Card, Col } from "react-bootstrap"
import './OfferList.css'
import { Link } from "react-router-dom"


const OffersList = ({ offers }) => {

    return (
        offers.map(elm =>
            <Col md={{ span: 4 }}>
                <Card key={elm._id} style={{ width: '22rem', height: '650px', backgroundColor: 'rgb(208 208 208' }}>
                    <div style={{ height: '400px' }}>
                        <Card.Img className="cardImg" variant={elm.title} src={elm.imageUrl} />
                        <Card.Body>
                            <Card.Title style={{ height: '50px' }}><h3>{elm.title}</h3></Card.Title>
                            <hr />
                            <Card.Subtitle style={{ height: '30px' }}><h3>{elm.type}</h3></Card.Subtitle>
                            <hr />
                            <Card.Text style={{ height: '100px' }}>{elm.description}</Card.Text>
                            <hr />
                            <Card.Text>salary: {elm.salary}</Card.Text>
                            <hr />

                            <Link className='link' to={`/offer/details/${elm._id}`}>
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
    )
}

export default OffersList