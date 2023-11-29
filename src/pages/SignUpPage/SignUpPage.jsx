import { Container, Col, Row } from 'react-bootstrap'
import SignUpForm from '../../components/SingUpForm/SingUpForm'

const SignUpPage = () => {

    return (
        <Container>

            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Sign Up</h1>
                    <hr />
                    <SignUpForm />

                </Col>
            </Row>
        </Container >
    )
}

export default SignUpPage