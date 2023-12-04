import { Row } from "react-bootstrap"
import CompanyCard from "../CompanyCard/CompanyCard"

const CompaniesList = ({ companies, handleForDelete }) => {

    return (
        <div className="CompaniesList"  >
            <Row >
                {companies.map(elm =>
                    <CompanyCard company={elm} handleForDelete={handleForDelete} />
                )}
            </Row >
        </div >

    )
}

export default CompaniesList