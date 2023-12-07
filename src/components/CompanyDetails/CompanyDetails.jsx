import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import './CompanyDetails.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import CompanyOffers from '../CompanyOffers/CompanyOffers'


const CompanyDetails = ({ company, handleShow }) => {

    const { loggedUser } = useContext(AuthContext)

    return (
        <div className="companyInfo">
            <Row >
                <Col md={{ span: 4 }}>
                    <Image src={company.image} alt={company.name} className="companyImg" thumbnail />
                </Col>
                <Col>
                    <h2 style={{ paddingRight: '20px' }}>{company.field}</h2>
                    <hr />
                    <h3>Email: {company.email}</h3>
                    <hr />
                    <h3>website: <p><a href={company.website}> {company.website}</a></p></h3>
                </Col>
                <Col>
                    <p ><h5>email: <Link to='https://mail.google.com/mail/u/0/#inbox?compose=new'>{company.email}</Link></h5></p>
                </Col>
            </Row>
            <hr />
            <Container >
                <h4><p className='description' style={{ fontSize: '1.4em' }}>Description:</p><p >{company.description}</p></h4>
            </Container>
            {loggedUser && company.offers && company.offers.length > 0 &&
                <>
                    <hr />
                    <Container>
                        <h4>Offers:</h4>
                        <Row>
                            {company.offers && company.offers.length > 0 && company.offers.map((elm) => (
                                <CompanyOffers offer={elm} />
                            ))}
                        </Row>
                    </Container>
                </>
            }

            {(loggedUser?._id === company.owner.toString() || loggedUser?.role === 'ADMIN') &&
                <>
                    <hr />
                    <Container>
                        <span className="gap-2 mt-3" style={{ marginLeft: '450px' }} onClick={handleShow}>
                            <Button variant='info' >
                                Edit Offer
                            </Button>
                        </span>
                    </Container >
                </>}



        </div >
    )
}

export default CompanyDetails