import React from 'react'
import {Form, Button, Modal} from 'react-bootstrap';
import Page from '../../components/Page'

const SignUp = () => {
    return (
        <Page>
            <Modal.Dialog>
            <Modal.Header closeButton>
                    <Modal.Title>SIGNUP</Modal.Title>
                </Modal.Header>
            <Form>
                <Modal.Body>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o seu nome" />
                   
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>CRM</Form.Label>
                    <Form.Control type="number" placeholder="Digite aqui seu CRM:" />
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite o seu e-mail corporativo." />
                   
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite a sua senha." />
                </Form.Group>
               </Modal.Body>
               <Modal.Footer>
                <Button style={{backgroundColor:"#86b2f3", border:"none"}} type="submit">
                    SignUp
                </Button>
                </Modal.Footer>
            </Form>
            </Modal.Dialog>
        </Page>
    )
}

export default SignUp;