import { useState } from "react"
import companiesServices from "../../services/companies.services"
import { Form, Button, Col, Row } from "react-bootstrap"
import uploadServices from "../../services/upload.services"
import FormErrors from "../FormErrors/FormErrors"

const CompanyEditForm = ({ company }) => {


    const [editedCompany, setEditedCompany] = useState(company)
    const [errors, setErrors] = useState()
    const [imageLoading, setImageLoading] = useState(false)


    const handleForSubmit = () => {

        companiesServices
            .editCompany(company._id, editedCompany)
            .then(response => console.log(response))
            .catch(err => {
                setErrors(err.response.data.errorMessages)
            })
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setEditedCompany({ ...editedCompany, [name]: value })
    }

    const handleFileUpload = e => {

        setImageLoading(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                setEditedCompany({ ...editedCompany, image: res.data.cloudinary_url })
                console.log(res.data.cloudinary_url)
                setImageLoading(false)
            })
            .catch(err => {
                console.log(err)
                setImageLoading(false)
            })
    }


    return (
        <Form onSubmit={handleForSubmit}>

            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name of the company:</Form.Label>
                <Form.Control type="text" value={editedCompany.name} name='name' onChange={handleInputChange} placeholder="Name and last name" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' value={editedCompany.email} placeholder="Enter email" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridField">
                    <Form.Label>Field:</Form.Label>
                    <Form.Control type="text" name='field' value={editedCompany.field} placeholder="Field" onChange={handleInputChange} />
                </Form.Group>

            </Row>
            <Form.Group as={Col} controlId="formGridWebsite">
                <Form.Label>website</Form.Label>
                <Form.Control type="text" name='website' value={editedCompany.website} placeholder="Website" onChange={handleInputChange} />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="image">
                    <Form.Label>Image:</Form.Label>
                    <Form.Control type="file" placeholder=".jpg or .npg" onChange={handleFileUpload} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridField">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="text" name='phoneNumber' value={editedCompany.phoneNumber} placeholder="Phone Number" onChange={handleInputChange} />
                </Form.Group>

            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" name='description' value={editedCompany.description} rows={3} onChange={handleInputChange} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="dark" type="submit" disabled={imageLoading}>{imageLoading ? 'Loading Image...' : 'Edit Company'}</Button>
            </div>
            {errors && errors.map(elm => <FormErrors children={elm} />)}

        </Form>
    )
}

export default CompanyEditForm