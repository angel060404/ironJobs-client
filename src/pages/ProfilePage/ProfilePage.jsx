import { Col, Container, Row } from "react-bootstrap"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"
import authService from "../../services/auth.services"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import './ProfilePage.css'

const ProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)
    const [user, setUser] = useState()

    const findUser = () => {

        authService
            .findById(loggedUser._id)
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        findUser()
    }, [])

    return (
        <div className="profilePage">
            <Container>
                <Row className="ImgName">
                    <Col md={{ span: 6, offset: 3 }} className="mt-4">
                        <h1>Profile Page</h1>
                        <hr />
                        <ProfileInfo user={user} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProfilePage