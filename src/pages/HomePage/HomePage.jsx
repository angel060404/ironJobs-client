import companiesServices from "../../services/companies.services";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import "./HomePage.css";
import { useState, useEffect } from "react";
import CompaniesCarrusel from "../../components/CompaniesCarrusel/CompaniesCarrusel";

const HomePage = () => {
  const [companies, setCompanies] = useState();

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = () => {
    companiesServices
      .getCompanies()
      .then(({ data }) => {
        setCompanies(data.slice(0, 4));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="homePage">
      <div className="heroSection">
        <Image
          className="imageHome"
          src="https://images.ecestaticos.com/KtLikvNJBL9r6ZNvY681r9N-fIE=/0x136:1617x1046/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb51%2Fae2%2F535%2Fb51ae2535b73fb78c33741c406b26857.jpg"
        />
        <div className="heroText">
          <h1>IRONJOB$</h1>
          <hr />
          <p>
            Your comprehensive platform for job hunting and talent acquisition.
            Discover top-notch job opportunities or post your own openings. Find
            the ideal job or the perfect candidate for your team on IronJobs!
          </p>
          <Button variant="primary" className="ctaButton">
            Get Started
          </Button>
        </div>
      </div>

      {companies && (
        <div className="companies ">
          <h2>Find some of our companies:</h2>
          <CompaniesCarrusel companies={companies} />
        </div>
      )}

      <div className="homeInfo">
        <Container>
          <div className="pt-5 homeInfoRow">
            <h3 className="homeInfoHeading">Why IRONJOB$?</h3>
            <Row>
              <Col md={{ span: 5, offset: 1 }} className="homeColInfo">
                <h4>Diverse Job Options:</h4>
                <p>
                  Offers a wide array of job listings across various industries
                  and sectors, catering to both startups and established
                  corporations.
                </p>
              </Col>
              <Col md={5} className="homeColInfo">
                <h4>Access to Quality Jobs:</h4>
                <p>
                  Stands out for its selection of high-quality job postings,
                  offering challenging and rewarding opportunities for
                  professionals.
                </p>
              </Col>

              <Col md={{ span: 5, offset: 1 }} className="homeColInfo">
                <h4>User Experience:</h4>
                <p>
                  Provides an intuitive and user-friendly interface, making job
                  search and application processes efficient and effective.
                </p>
              </Col>

              <Col md={5} className="homeColInfo">
                <h4>Statistics and Success Rates:</h4>
                <p>
                  Showcases statistical data on successful placements, candidate
                  satisfaction rates, and associated companies.
                </p>
              </Col>

              <Col md={{ span: 6, offset: 3 }} className="homeColInfo">
                <h4>Continuous Innovation:</h4>
                <p>
                  IronJobs constantly innovates, introducing new features and
                  technologies for employers and job seekers.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
