import { Modal } from "react-bootstrap";
import OfferEditForm from "../OfferEditForm/OfferEditForm";



const OfferEditModal = ({ onhide, show, setShowModal, loadOffer, offer }) => {


    return (
        <>
            <Modal show={show} onHide={onhide}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <OfferEditForm setShowModal={setShowModal} loadOffer={loadOffer} offer={offer} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default OfferEditModal