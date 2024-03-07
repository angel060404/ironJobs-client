import companiesServices from "../../services/companies.services";
import { Container, Image, Row, Col } from "react-bootstrap";
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
      <div className="imageText">
        <Image
          className="imageHome"
          src="https://images.ecestaticos.com/KtLikvNJBL9r6ZNvY681r9N-fIE=/0x136:1617x1046/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb51%2Fae2%2F535%2Fb51ae2535b73fb78c33741c406b26857.jpg"
        />
        <div className="textCenter">
          <div className="homeCaption">
            <h1>IRONJOB$</h1>
            <hr />
            <p>
              Your comprehensive platform for job hunting and talent
              acquisition. Discover top-notch job opportunities or post your own
              openings. Connect with renowned companies or showcase your
              business by adding job vacancies. Find the ideal job or the
              perfect candidate for your team on IronJobs: your pathway to
              career success.
            </p>
          </div>
        </div>
      </div>
      {companies && (
        <>
          <div className="companies m-4">
            <h2>Find some of our companies:</h2>
            <div className="companiesCarrusel"></div>
            <CompaniesCarrusel companies={companies} />
          </div>
        </>
      )}

      <div className="homeInfo">
        <Container>
          <div className="pt-5 homeInfoRow">
            <h3 className="homeInfo2">¿Why IRONJOB$?</h3>
            <Row>
              <Col md={{ span: 5, offset: 1 }} className="homeColInfo">
                <h4>Diverse Job Options:</h4>
                <p>
                  Offers a wide array of job listings across various industries
                  and sectors, catering to emerging startups as well as
                  established corporations
                </p>
              </Col>
              <Col md={{ span: 5 }} className="homeColInfo2">
                <h4>Access to Quality Jobs:</h4>
                <p>
                  Stands out for its selection of high-quality job postings,
                  providing challenging and rewarding opportunities for
                  professionals at different career stages.
                </p>
              </Col>

              <Col md={{ span: 5, offset: 1 }} className="homeColInfo">
                <h4>User Experience:</h4>
                <p>
                  Provides an intuitive and user-friendly interface, making job
                  search and application processes efficient and effective.
                </p>
              </Col>

              <Col md={{ span: 5 }} className="homeColInfo2">
                <h4>Statistics and Success Rates:</h4>
                <p>
                  Showcases statistical data demonstrating IronJobs' success,
                  such as the number of successful placements, candidate
                  satisfaction rates, and the volume of associated companies.
                </p>
              </Col>

              <Col md={{ span: 5, offset: 1 }} className="homeColInfo">
                <h4>Support for Companies and Candidates:</h4>
                <p>
                  Emphasizes how IronJobs supports both companies and
                  candidates, offering tools for streamlined hiring processes
                  and resources for enhancing job search.
                </p>
              </Col>

              <Col md={{ span: 5 }} className="homeColInfo2">
                <h4>Professional Community:</h4>
                <p>
                  Highlights the active community of professionals endorsing the
                  platform, including testimonials and positive feedback from
                  satisfied users.
                </p>
              </Col>

              <Col md={{ span: 6, offset: 3 }} className="homeColInfo3">
                <h4>Continuous Innovation:</h4>
                <p>
                  Discusses IronJobs' ongoing efforts in innovation, introducing
                  new features and technologies to enhance the experience for
                  employers and job seekers alike.
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
