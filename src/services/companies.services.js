import axios from 'axios'

class CompaniesService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/companies`
        })
    }

    getCompanies() {
        return this.api.get('/getAllCompanies')
    }

    getOneCompany(company_id) {
        return this.api.get(`/getOneCompany/${company_id}`)
    }

    // createCompany()
}

const companiesServices = new CompaniesService()

export default companiesServices