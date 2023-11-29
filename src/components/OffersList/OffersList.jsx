import { Button, Card } from "react-bootstrap"



const OffersList = ({ offers }) => {

    return (
        offers.map(elm =>
            <Card key={elm._id} style={{ width: '18rem' }}>
                <Card.Img variant={elm.title} src={elm.imageUrl} />
                <Card.Body>
                    <Card.Title><h2>{elm.title}</h2></Card.Title>
                    <Card.Subtitle><h3>{elm.type}</h3></Card.Subtitle>
                    <Card.Text>{elm.description}</Card.Text>
                    <Card.Text>salary: {elm.salary}</Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        )
    )
}

export default OffersList