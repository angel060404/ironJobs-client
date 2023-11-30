import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import { Col, Container, Row, Image } from 'react-bootstrap'
import './ProfileInfo.css'

import authService from "../../services/auth.services"
import Loader from "../Loader/Loader"


const ProfileInfo = () => {

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


        <div className="profileInfo">
            <Container>
                {!user ?
                    <Loader />
                    :
                    <>
                        <Row >
                            <Col md={{ span: 4 }}>
                                <Image src={user.avatar} alt={user.name} className="profileImg" thumbnail />
                            </Col>
                            <Col>
                                <h2>{user.name}</h2>
                                <h3>Age: {user.age}</h3>
                            </Col>
                        </Row>
                        <Row>
                            <h4><p>Description:</p><p>Passionate about innovation and leadership. Committed entrepreneur striving to make a difference. Firm believer in the power of creativity and teamwork to drive meaningful change. A perpetual learner and challenger of norms.</p></h4>
                        </Row>
                    </>
                }
            </Container>
        </div>
    )
}

export default ProfileInfo