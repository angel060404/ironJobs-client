import { Link } from "react-router-dom"
import CompaniesList from "../../components/CompaniesList/CompanyList"
import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from 'react'
import companiesServices from '../../services/companies.services'
import Loader from '../../components/Loader/Loader'


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



    return (
        <div className="CompaniesGallery mt-4">
            <Container>
                <h1>HOLAAA SOY LA LISTA DE LAS COMPAÑIAS</h1>
                <Link to={`/company/create`} >create</Link>
                <hr />
                {
                    companies ?

                        <CompaniesList companies={companies} />

                        :

                        <Loader />
                }
            </Container>
        </div>

    )
}

export default CompaniesGallery