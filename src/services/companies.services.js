import axios from 'axios'

class CompaniesService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.REACT_APP_API_URL}/offers`
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

export default CompaniesService