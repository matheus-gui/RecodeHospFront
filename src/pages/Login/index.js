import React, { useState} from 'react'
import {Form, Button, Modal} from 'react-bootstrap';
import {Input} from 'reactstrap';
import Page from '../../components/Page';
import {Link} from 'react-router-dom';



export default function Login () {

    const [form, setForm] = useState({
        email:'',
        password:''
    });
    
    
    const onSubmit = () => {
        if (form.email === "admin@hosprecode.com.br" && form.password === "admin") {
            window.location.href =  "/recepcao";
        } else{
            alert('Senha incorreta!');
        }   
    }
    
    const onChange = (event) => {
        const {
            target: {name, value}
        } = event;
    
        setForm({
            ...form,
            [name]: value
        });
    }
    
    
    return (
        <Page>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>LOGIN</Modal.Title>
                </Modal.Header>
                <Form>
                    
                
                  <Modal.Body>  
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Input type="email" value={form.user} 
                        placeholder="Digite o seu e-mail corporativo." 
                        onChange = {onChange} name ="email" />
                    
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Input type="password" value={form.password} placeholder="Digite a sua senha." 
                        onChange = {onChange} name ="password" />
                    </Form.Group>

                </Modal.Body>
                    <Modal.Footer>
                     <Button style={{backgroundColor:"#86b2f3", border:"none"}} 
                     type="submit" onClick = {onSubmit}>
                        Login
                    </Button>
                    <Form.Group>
                        <Link to="/signup">Cadastre-se</Link>
                    </Form.Group>
                    </Modal.Footer>
                   
                </Form>
            </Modal.Dialog>
        </Page>
    )
}
