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
                                <h2 className='name mb-3'>{user.name}</h2>
                                <h3 className='mb-3'>Age: {user.age}</h3>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <h4><p style={{ fontSize: '1.4em' }}>Description:</p></h4><p>{user.description}</p>
                        </Row>
                    </>
            }
        </div>
    )
}

export default ProfileInfo