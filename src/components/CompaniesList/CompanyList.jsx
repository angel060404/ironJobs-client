import { Row, Col } from "react-bootstrap"
import CompanyCard from "../CompanyCard/CompanyCard"

const CompaniesList = ({ companies, refreshCompanies }) => {

    return (
        <div className="CompaniesList"  >
            <Row >
                {companies?.map(elm => {
                    return (
                        <Col key={elm._id} md={{ span: 6 }} style={{ display: "flex", justifyContent: "space-around" }} >
                            <CompanyCard company={elm} refreshCompanies={refreshCompanies} />
                        </Col>
                    )
                })}
            </Row >
        </div >

    )
}

export default CompaniesList