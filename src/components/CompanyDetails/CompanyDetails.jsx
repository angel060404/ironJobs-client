import { Col, Container, Image, Row } from 'react-bootstrap'
import './CompanyDetails.css'
import { Link } from 'react-router-dom'

const CompanyDetails = ({ company }) => {
    return (
        <div className="companyInfo">
            <Row >
                <Col md={{ span: 4 }}>
                    <Image src={company.image} alt={company.name} className="companyImg" thumbnail />
                </Col>
                <Col>
                    <h2>{company.field}</h2>
                    <h3>Email: {company.email}</h3>
                </Col>
                <Col>
                    <h3>website:<a href={company.website}> {company.website}</a></h3>
                </Col>
            </Row>
            <Container className='description'>
                <Row>
                    <h4><p className='description'>Description:</p><p className='description'>{company.description}</p></h4>
                    <p className='description'><h5>email: <Link to='https://mail.google.com/mail/u/0/#inbox?compose=new'>{company.email}</Link></h5></p>
                </Row>
            </Container >
        </div>
    )
}

export default CompanyDetails