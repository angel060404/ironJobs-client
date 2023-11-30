import { Col, Container, Row } from "react-bootstrap"
import LogInForm from "../../components/LogInForm/LogInForm"

const LogInPage = () => {

    return (
        <div className="LogInPage">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="mt-4">
                        <h1>Log In </h1>
                        <hr />
                        <LogInForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LogInPage