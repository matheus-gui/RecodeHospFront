import React from 'react'
import {Form, Button} from 'react-bootstrap';
import Page from '../../components/Page';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <Page>
            <Form 
            style={{
            width:"20%", 
            marginLeft:"40vw", 
            marginTop:"10%", 
            border:"1px solid blue", 
            borderRadius:"10px", 
            boxShadow: "5px",
            padding:"15px",
            backgroundColor:"white"}}>
                
               
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite o seu e-mail corporativo." />
                   
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite a sua senha." />
                </Form.Group>

                <Form.Group>
                    <Link to="/signup">Cadastre-se</Link>
                </Form.Group>
               
                <Button style={{backgroundColor:"#86b2f3", border:"none"}} type="submit">
                    Login
                </Button>
            </Form>
        </Page>
    )
}

export default Login;