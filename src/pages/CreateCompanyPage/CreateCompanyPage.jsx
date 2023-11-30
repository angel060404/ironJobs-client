import CompanyForm from "../../components/CompanyForm/CompanyForm"

import { Container, Row, Col } from 'react-bootstrap'

const CreateCompanyPage = () => {


    return (
        <div className="createCompany">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="mt-4">
                        <h1>Create a Company</h1>
                        <hr />
                        <CompanyForm />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default CreateCompanyPage