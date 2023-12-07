import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import companiesServices from "../../services/companies.services"
import { Container } from "react-bootstrap"
import CompanyDetails from "../../components/CompanyDetails/CompanyDetails"
import Loader from "../../components/Loader/Loader"
import CompanyEditModal from "../../components/CompanyEditModal/CompanyEditModal"

const CompanyDetailsPage = () => {

    const { company_id } = useParams()

    const [company, setCompany] = useState()

    useEffect(() => {
        loadCompany()
    }, [])

    const loadCompany = () => {

        companiesServices
            .getOneCompany(company_id)
            .then(({ data }) => setCompany(data))
            .catch(err => console.log(err))
    }

    const [showModal, setShowModal] = useState(false)

    const handleShow = () => setShowModal(true)

    return (
        <div className="companyDetails mt-2 pb-3">
            <Container>
                {company ?
                    <>
                        <h1 className="">{company.name} Details</h1>
                        <hr />
                        <CompanyEditModal setShowModal={setShowModal} show={showModal} loadCompany={loadCompany} company={company} />
                        <CompanyDetails company={company} handleShow={handleShow} />

                    </>
                    : <Loader />}
            </Container>
        </div>
    )
}

export default CompanyDetailsPage
