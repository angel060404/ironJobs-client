import { Row, Col } from "react-bootstrap";
import CompanyCard from "../CompanyCard/CompanyCard";
import "./companyList.css";

const CompaniesList = ({ companies, refreshCompanies }) => {
  return (
    <div className="CompaniesList">
      <Row>
        {companies?.map((elm) => {
          return (
            <Col
              key={elm._id}
              md={{ span: 6 }}
              lg={{ span: 4 }}
              className="companyCol"
            >
              <CompanyCard company={elm} refreshCompanies={refreshCompanies} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CompaniesList;
