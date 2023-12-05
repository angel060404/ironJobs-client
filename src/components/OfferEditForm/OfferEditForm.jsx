import { useState } from "react"
import offersService from "../../services/offers.services"
import { Form, Button, Col, Row } from "react-bootstrap"

const OfferEditForm = ({ offer }) => {

    const [editedOffer, setEditedOffer] = useState(offer)
    const [errors, setErrors] = useState()

    const handleForSubmit = () => {

        offersService
            .editOffer(offer._id, editedOffer)
            .then(response => console.log(response))
            .catch(err => {
                setErrors(err.response.data.errorMessages)
            })
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setEditedOffer({ ...editedOffer, [name]: value })
    }

    return (
        <Form onSubmit={handleForSubmit}>

            <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Title of the Offer:</Form.Label>
                <Form.Control type="text" value={editedOffer.title} name='title' onChange={handleInputChange} placeholder="Title" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control type="occupation" name='occupation' value={editedOffer.occupation}
                        placeholder="Enter occupation" onChange={handleInputChange} />
                </Form.Group>


            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Longitude:</Form.Label>
                    <Form.Control type="text" step="any" name='longitude' value={editedOffer.longitude} placeholder="Enter longitude" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Latitude:</Form.Label>
                    <Form.Control type='text' step="any" name='latitude' value={editedOffer.latitude} placeholder="Enter latitude" onChange={handleInputChange} />
                </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridDuration">
                <Form.Label>Duration:</Form.Label>
                <Form.Control type='text' name='duration' value={editedOffer.duration} placeholder="duration on months" onChange={handleInputChange} />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Salary:</Form.Label>
                    <Form.Control type="text" name='salary' value={editedOffer.salary} placeholder="Write a Number" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridType">
                    <Form.Label>Type:</Form.Label>
                    <Form.Select aria-label="Default select example"
                        value={editedOffer.type}
                        onChange={handleInputChange}
                        name='type'>
                        <option >Chosse a type job</option>
                        <option value="part-time">Part Time</option>
                        <option value="full-time">Full Time</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" name='description' value={editedOffer.description} rows={3} onChange={handleInputChange} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="dark" type="submit">Edit Offer</Button>
            </div>
            {errors && errors.map(elm => <FormErrors children={elm} />)}
        </Form>
    )
}

export default OfferEditForm