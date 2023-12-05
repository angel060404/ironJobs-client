import { Col, Row, Image } from 'react-bootstrap'
import './ProfileInfo.css'
import Loader from "../Loader/Loader"


const ProfileInfo = ({ user }) => {

    return (
        <div className="profileInfo">
            {
                !user ?
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
                            <h4><p>Description:</p><p>{user.description}</p></h4>
                        </Row>
                    </>
            }
        </div>
    )
}

export default ProfileInfo