import { Button, Card } from "react-bootstrap"

const CompaniesList = ({ companies }) => {

    return (
        companies.map(elm =>
            <Card key={elm._id} style={{ width: '18rem' }}>
                <Card.Img variant={elm.name} src={elm.image} />
                <Card.Body>
                    <Card.Title><h2>{elm.name}</h2></Card.Title>
                    <Card.Subtitle><h3>{elm.field}</h3></Card.Subtitle>
                    <Card.Text>{elm.description}</Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        )
    )
}
// name: 1, image: 1, field: 1, description: 1
export default CompaniesList