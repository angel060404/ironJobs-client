import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import companiesServices from "../../services/companies.services"
import { AuthContext } from "../../contexts/auth.context"
import { useContext } from "react"

const CompanyCard = ({ company, refreshCompanies }) => {

    const { loggedUser } = useContext(AuthContext)

    const deleteOneCompany = (company_id) => {

        companiesServices
            .deleteCompany(company_id)
            .then(() => {
                refreshCompanies()
            })
            .catch(err => console.log(err))
    }

    return (

        <div className="mt-4" >
            <Card key={company._id} className="card">
                <div style={{ height: '450px' }}>
                    <div className="CardImgCenter">
                        <Card.Img className="CardImg" variant={company.name} src={company.image} />
                    </div>
                    <Card.Body>
                        <Card.Title style={{ height: '20px' }}><h2>{company.name}</h2></Card.Title>
                        <hr />
                        <Card.Subtitle style={{ height: '20px' }}><h3>{company.field}</h3></Card.Subtitle>
                        <hr />
                        <Card.Text style={{ height: '100px' }}>{company.description}</Card.Text>
                        <Link className='link' to={`/company/details/${company._id}`}>
                            <div className="d-grid gap-2">
                                <Button variant="dark">Details</Button>
                            </div>
                        </Link>
                        {(loggedUser?._id === company.owner.toString() || loggedUser?.role === 'ADMIN') &&
                            <span className="d-grid gap-2 mt-3">
                                <Button onClick={() => { deleteOneCompany(company._id) }} className="btn-danger">
                                    Delete
                                </Button>
                            </span>
                        }
                    </Card.Body>
                </div>
            </Card>
        </div>

    )
}

export default CompanyCard