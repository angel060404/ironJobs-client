import { Col, Container, Row } from "react-bootstrap"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"

const ProfilePage = () => {

    return (
        <div className="profilePage">
            <Container>
                <Row className="ImgName">
                    <Col md={{ span: 6, offset: 3 }} className="mt-4">
                        <h1>Profile Page</h1>
                        <hr />
                        <ProfileInfo />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProfilePage