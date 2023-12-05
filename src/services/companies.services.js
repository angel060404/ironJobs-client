import axios from 'axios'

class CompaniesService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/companies`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getCompanies() {
        return this.api.get('/getAllCompanies')
    }

    getOneCompany(company_id) {
        return this.api.get(`/getOneCompany/${company_id}`)
    }

    createCompany(company_body) {
        return this.api.post('/createCompany', company_body)
    }

    deleteCompany(company_id) {
        return this.api.delete(`/deleteCompany/${company_id}`)
    }

    editCompany(company_id, company_body) {
        return this.api.put(`/updateCompany/${company_id}`, company_body)
    }
}

const companiesServices = new CompaniesService()

export default companiesServices