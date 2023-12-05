import { Button, Col, Image, Modal, Row } from "react-bootstrap"
import './OfferAplicants.css'
import ProfileInfo from "../ProfileInfo/ProfileInfo.jsx"
import { useState } from "react"
import offersService from "../../services/offers.services.js"

const OfferAplicants = ({ applicant, offer, user, loadOffer }) => {

    const [showModalAplicant, setShowModalAplicant] = useState(false)

    const handleCloseApplicant = () => setShowModalAplicant(false)
    const handleShowApplicant = () => setShowModalAplicant(true)

    const deleteUser = () => {

        offersService
            .unSubscribeUser(offer._id, { user_id: applicant._id })
            .then(() => loadOffer())
            .catch(err => console.log(err))
    }

    return (

        <Col md={{ span: 2 }}>
            <div className="offerApplicant mt-3">
                {applicant &&
                    <div className="applicantsInfo"><span onClick={handleShowApplicant}>
                        <Image src={applicant.avatar} roundedCircle />
                        <p style={{ fontWeight: 'bold' }}>{applicant.name}</p>
                    </span>
                    </div>}


                <Modal show={showModalAplicant} onHide={handleCloseApplicant}>
                    <Modal.Header closeButton>
                        <Modal.Title>Profile of: {applicant.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ProfileInfo user={applicant} />
                        <hr />
                        <Row>

                            <Button as={Col} onClick={handleCloseApplicant} variant="dark">Close</Button>

                            {user?.companies.includes(offer.company) && < Button as={Col} variant="danger" onClick={() => deleteUser()}>Reject</Button>}

                        </Row>
                    </Modal.Body>
                </Modal>
            </div>
        </Col >

    )
}

export default OfferAplicants