import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import companiesServices from "../../services/companies.services"
import { Container } from "react-bootstrap"
import CompanyDetails from "../../components/CompanyDetails/CompanyDetails"
import Loader from "../../components/Loader/Loader"


const CompanyDetailsPage = () => {

    const { company_id } = useParams()

    const [company, setCompany] = useState()

    useEffect(() => {
        loadOffer()
    }, [])

    const loadOffer = () => {

        companiesServices
            .getOneCompany(company_id)
            .then(({ data }) => setCompany(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            {company ?
                <>
                    <h1 className="mt-4">{company.name} Details</h1>
                    <hr />
                    <CompanyDetails company={company} />
                </>
                : <Loader />}
        </Container>
    )
}

export default CompanyDetailsPage
