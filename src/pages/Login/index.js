import React from 'react'
import {Form, Button} from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <Form style={{width:"50%", marginLeft:"25%", marginTop:"10%", border:"1px solid", borderRadius:"10px", boxShadow: "5px" ,padding:"15px"}}>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o seu nome" />
                   
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Código</Form.Label>
                    <Form.Control type="number" placeholder="Digite o seu código." />
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite o seu e-mail corporativo." />
                   
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite a sua senha." />
                </Form.Group>
               
                <Button style={{backgroundColor:"#86b2f3", border:"none"}} type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login;