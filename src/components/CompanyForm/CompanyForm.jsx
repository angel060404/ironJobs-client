import { useState } from "react"
import companiesServices from "../../services/companies.services"
import { useNavigate } from "react-router-dom"
import { Form, Button, Col, Row } from "react-bootstrap"

const CompanyForm = () => {

    const [companyData, setCompanyData] = useState({
        email: '',
        name: '',
        website: '',
        field: '',
        phoneNumber: 0,
        image: '',
        description: '',
    })
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setCompanyData({ ...companyData, [name]: value })
    }

    const handleForSubmit = e => {
        e.preventDefault()
        companiesServices
            .createCompany(companyData)
            .then(({ data }) => console.log(data))
            .catch(err => {
                console.log(err)
                navigate('/companies')
            })

    }


    return (
        <Form onSubmit={handleForSubmit}>

            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name of the company:</Form.Label>
                <Form.Control type="text" value={companyData.name} name='name' onChange={handleInputChange} placeholder="Name and last name" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' value={companyData.email} placeholder="Enter email" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridField">
                    <Form.Label>Field:</Form.Label>
                    <Form.Control type="text" name='field' value={companyData.field} placeholder="Field" onChange={handleInputChange} />
                </Form.Group>

            </Row>
            <Form.Group as={Col} controlId="formGridWebsite">
                <Form.Label>website</Form.Label>
                <Form.Control type="text" name='website' value={companyData.website} placeholder="Website" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Image:</Form.Label>
                <Form.Control type="text" name='image' value={companyData.image} placeholder=".jpg or .npg" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" name='description' value={companyData.description} rows={3} onChange={handleInputChange} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="dark" type="submit">createCompany</Button>
            </div>

        </Form>
    )

}

export default CompanyForm