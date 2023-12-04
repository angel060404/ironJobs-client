import { Col, Form, Row, Button } from 'react-bootstrap'
import { useState } from 'react'
import authService from '../../services/auth.services'
import { useNavigate } from 'react-router-dom'
import uploadServices from '../../services/upload.services'

const SignUpForm = () => {

    const [signUpData, setSignUpData] = useState({
        email: "",
        password: '',
        age: 18,
        avatar: '',
        description: '',
        name: ''
    })

    const [imageLoading, setImageLoading] = useState(false)

    const ages = []
    for (let i = 18; i <= 90; i++) {
        ages.push(<option key={i} value={i}>{i}</option>);
    }

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignUpData({ ...signUpData, [name]: value })
    }

    const handleForSubmit = e => {

        e.preventDefault()

        authService
            .signUp(signUpData)
            .then(createdUser => {
                console.log(createdUser)
                navigate('/')
            })
            .catch(err => console.log(err))

    }

    const handleFileUpload = e => {

        setImageLoading(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                setSignUpData({ ...signUpData, avatar: res.data.cloudinary_url })
                setImageLoading(false)
            })
            .catch(err => {
                console.log(err)
                setImageLoading(false)
            })
    }

    return (
        <Form onSubmit={handleForSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name And Last Name:</Form.Label>
                    <Form.Control type="text" value={signUpData.name} name='name' onChange={handleInputChange} placeholder="Name and last name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAge">
                    <Form.Label>Age:</Form.Label>
                    <Form.Select aria-label="Default select example"
                        value={signUpData.age}
                        onChange={handleInputChange}
                        name='age'>
                        {ages}
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' value={signUpData.email} placeholder="Enter email" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' value={signUpData.password} placeholder="Password" onChange={handleInputChange} />
                </Form.Group>
            </Row>


            <Form.Group className="mb-3" controlId="avatar">
                <Form.Label>Avatar:</Form.Label>
                <Form.Control type="file" placeholder=".jpg or .npg" onChange={handleFileUpload} />            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" name='description' value={signUpData.description} rows={3} onChange={handleInputChange} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="dark" type="submit" disabled={imageLoading}>{imageLoading ? 'Loading Avatar...' : 'Sgn Up'}</Button>
            </div>


        </Form>
    )
}

export default SignUpForm