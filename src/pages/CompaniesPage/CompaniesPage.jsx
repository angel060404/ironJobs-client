import { Link } from "react-router-dom"
import CompaniesList from "../../components/CompaniesList/CompanyList"
import { Col, Container, Row, Button } from "react-bootstrap"
import { useContext, useEffect, useState } from 'react'
import companiesServices from '../../services/companies.services'
import Loader from '../../components/Loader/Loader'
import { AuthContext } from "../../contexts/auth.context"
import './CompaniesPage.css'

const CompaniesGallery = () => {

    const [companies, setCompanies] = useState()

    useEffect(() => {
        loadCompanies()
    }, [])

    const loadCompanies = () => {

        companiesServices
            .getCompanies()
            .then(({ data }) => setCompanies(data))
            .catch(err => console.log(err))
    }

    const { loggedUser } = useContext(AuthContext)


    return (
        <div className="CompaniesGallery mt-4 mb-4">
            <Container>
                <div className="companiesHeader">
                    <h1>Our Companies:</h1>
                    {loggedUser && <Link to={`/company/create`} ><Button variant="dark">create</Button></Link>}
                </div>
                <hr />
                {
                    companies ?

                        <CompaniesList companies={companies} refreshCompanies={loadCompanies} />

                        :

                        <Loader />
                }
            </Container>
        </div>

    )
}

export default CompaniesGallery