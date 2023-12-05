import { Modal } from "react-bootstrap";
import CompanyEditForm from "../CompanyEditForm/CompanyEditForm";



const CompanyEditModal = ({ onhide, show, setShowModal, loadCompany, company }) => {


    return (
        <>
            <Modal show={show} onHide={onhide}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CompanyEditForm setShowModal={setShowModal} loadCompany={loadCompany} company={company} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CompanyEditModal