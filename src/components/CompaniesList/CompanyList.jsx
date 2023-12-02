import { Button, Card, Col, Row } from "react-bootstrap"
import './CompanyList.css'

const CompaniesList = ({ companies }) => {

    return (
        <div className="CompaniesList">
            <Row>

                {companies.map(elm =>
                    <Col key={elm._id} md={{ span: 4 }}>

                        {/* TODO: DESACOPLAR A COMPANYCARD */}

                        {/* TODO: MODERAR ESTILOS EN LINEA */}

                        <Card key={elm._id} style={{ width: '22rem', height: '550px', backgroundColor: 'rgb(208 208 208' }}>
                            <div style={{ height: '400px' }}>
                                <Card.Img className="cardImg" variant={elm.name} src={elm.image} />
                                <Card.Body>
                                    <Card.Title><h2>{elm.name}</h2></Card.Title>
                                    <hr />
                                    <Card.Subtitle><h3>{elm.field}</h3></Card.Subtitle>
                                    <hr />
                                    <Card.Text style={{ height: '100px' }}>{elm.description}</Card.Text>
                                    <div className="d-grid gap-2">
                                        <Button variant="dark">Details</Button>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card>

                    </Col >
                )}

            </Row >
        </div >

    )
}

export default CompaniesList