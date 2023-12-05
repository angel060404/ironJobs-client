import { Row } from "react-bootstrap"
import CompanyCard from "../CompanyCard/CompanyCard"

const CompaniesList = ({ companies, refreshCompanies }) => {

    return (
        <div className="CompaniesList"  >
            <Row >
                {companies.map(elm =>
                    <CompanyCard company={elm} refreshCompanies={refreshCompanies} />

                )}
            </Row >
        </div >

    )
}

export default CompaniesList