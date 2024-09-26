import { useState, useContext } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import companiesServices from "../../services/companies.services";
import { AuthContext } from "../../contexts/auth.context";
import "./CompanyCard.css";

const CompanyCard = ({ company, refreshCompanies }) => {
  const { loggedUser } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const [companyToDelete, setCompanyToDelete] = useState(null);

  const handleShowModal = (company_id) => {
    setCompanyToDelete(company_id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCompanyToDelete(null);
  };

  const confirmDelete = () => {
    if (companyToDelete) {
      companiesServices
        .deleteCompany(companyToDelete)
        .then(() => {
          refreshCompanies();
          handleCloseModal();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="CompanyCard">
      <Card className="customCard">
        <div className="cardImageContainer">
          <Card.Img variant="top" src={company.image} className="cardImage" />
        </div>
        <Card.Body>
          <Card.Title className="companyName">{company.name}</Card.Title>
          <Card.Subtitle className="companyField">
            {company.field}
          </Card.Subtitle>
          <Card.Text className="companyDescription">
            {company.description}
          </Card.Text>
          <Link to={`/company/details/${company._id}`} className="detailsLink">
            <Button className="detailsButton">View Details</Button>
          </Link>
          {(loggedUser?._id === company.owner.toString() ||
            loggedUser?.role === "ADMIN") && (
            <Button
              onClick={() => handleShowModal(company._id)}
              className="deleteButton"
            >
              Delete
            </Button>
          )}
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this company?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CompanyCard;
