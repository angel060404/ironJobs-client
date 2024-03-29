import { Modal } from "react-bootstrap";
import OfferForm from "../OfferForm/OfferForm";

const OfferModalForm = ({ onhide, show, setShowModal, loadOffers }) => {
  return (
    <>
      <Modal show={show} onHide={onhide}>
        <Modal.Header closeButton>
          <Modal.Title>Create your offer:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OfferForm setShowModal={setShowModal} loadOffers={loadOffers} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OfferModalForm;
