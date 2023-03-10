import axios from 'axios';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const submit = (data) => {
        console.log(data);
        axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/users/login/`, data)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                navigate("/")
            })
            .catch(error => {
                if (error.response.status === 401) {
                    alert("Credenciales incorrectas")
                }
                console.log(error)
            })
    }


    return (
        <div className='container-login'>
            <Form onSubmit={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password")} />
                </Form.Group>
                <Button className='container' style={{ color: "red" }} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div className='container-body'>
                <h3>© Carlos Muñoz</h3>
                <section className='container-social'>
                    <a href="https://www.instagram.com/nesterlon/"><i className='bx bxl-instagram'></i></a>
                    <a href="https://github.com/NesTerLoN392"><i className='bx bxl-github'></i></a>
                    <a href="https://www.linkedin.com/in/carlos-mu%C3%B1oz-cuellar-programador/"><i className='bx bxl-linkedin-square'  ></i></a>
                </section>

            </div>
        </div>
    );
};

export default Login;