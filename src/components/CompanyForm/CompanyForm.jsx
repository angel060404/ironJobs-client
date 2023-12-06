import { useState } from "react"
import companiesServices from "../../services/companies.services"
import { useNavigate } from "react-router-dom"
import { Form, Button, Col, Row } from "react-bootstrap"
import uploadServices from "../../services/upload.services"
import FormErrors from "../FormErrors/FormErrors"

const CompanyForm = () => {

    const [companyData, setCompanyData] = useState({
        email: '',
        name: '',
        website: '',
        field: '',
        phoneNumber: 0,
        image: '',
        description: '',
        phoneNumber: 0
    })

    const [imageLoading, setImageLoading] = useState(false)

    const [errors, setErrors] = useState()

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setCompanyData({ ...companyData, [name]: value })
    }

    const handleForSubmit = e => {
        e.preventDefault()
        companiesServices
            .createCompany(companyData)
            .then(({ data }) => {
                setCompanyData(data)
                navigate('/companies')
            })
            .catch(err => {
                setErrors(err.response.data.errorMessages)
            })

    }

    const handleFileUpload = e => {

        setImageLoading(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                setCompanyData({ ...companyData, image: res.data.cloudinary_url })
                setImageLoading(false)
            })
            .catch(err => {
                console.log(err)
                setImageLoading(false)
            })
    }


    return (<div className="mb-3">
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
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="image">
                    <Form.Label>Image:</Form.Label>
                    <Form.Control type="file" placeholder=".jpg or .npg" onChange={handleFileUpload} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridField">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="text" name='phoneNumber' value={companyData.phoneNumber} placeholder="Phone Number" onChange={handleInputChange} />
                </Form.Group>

            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" name='description' value={companyData.description} rows={3} onChange={handleInputChange} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="dark" type="submit" disabled={imageLoading}>{imageLoading ? 'Loading Image...' : 'Create Company'}</Button>
            </div>
            {errors && errors.map(elm => <FormErrors children={elm} />)}

        </Form>
    </div>
    )

}

export default CompanyForm