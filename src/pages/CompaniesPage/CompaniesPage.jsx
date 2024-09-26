import { Link } from "react-router-dom";
import CompaniesList from "../../components/CompaniesList/CompanyList";
import { Container, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import companiesServices from "../../services/companies.services";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../contexts/auth.context";
import "./CompaniesPage.css";

const CompaniesGallery = () => {
  const [companies, setCompanies] = useState();

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = () => {
    companiesServices
      .getCompanies()
      .then(({ data }) => setCompanies(data))
      .catch((err) => console.log(err));
  };

  const { loggedUser } = useContext(AuthContext);

  return (
    <div className="CompaniesGallery mt-4 mb-4">
      <Container>
        <div className="companiesHeader">
          <h1 className="companiesTitle">Discover Our Partner Companies</h1>
          {loggedUser && (
            <Link to={`/company/create`}>
              <Button className="createButton">Create New Company</Button>
            </Link>
          )}
        </div>
        <hr className="divider" />
        {companies ? (
          <CompaniesList
            companies={companies}
            refreshCompanies={loadCompanies}
          />
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
};

export default CompaniesGallery;
