import React, { useState } from 'react'
import Page from '../../components/Page'
import {Modal, Button, Form} from 'react-bootstrap';
import api from '../../services/api';

const Recepcao = () => {

    

    const [form, setForm] = useState(
        {nome: "",
        cpf: "",
        sexo: "",
        data_nascimento: "",
        senha: "",
        email: ""});
    
    const onChange = (event) =>{
        const {target: {name, value}} = event;
        console.log(form)
        setForm({
            ...form,
            [name]:value,
        })
    };

    const onSubmit = () => {
        const data = {...form}
        window.alert(data)
        api.post('/paciente', data)
	    .then(({data}) => console.log(data))
        .catch((error) => console.log(error))
    }

    return (
        <Page>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>INTERNAÇÃO</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <div>
                            <Form.Group>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control 
                                value={form.nome}
                                name="nome" 
                                type="text" 
                                placeholder="Digite o seu nome"
                                onChange={onChange} />
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group style={{width:'50%'}}>
                                <Form.Label>CPF</Form.Label>
                                <Form.Control 
                                value={form.cpf}
                                name="cpf" 
                                type="number" 
                                placeholder="Digite o seu CPF"
                                onChange={onChange} />
                            </Form.Group>
                        </div>

                        <div>
                        <Form.Label>Sexo:</Form.Label>
                        <Form.Group 
                        as="select" 
                        name="sexo"
                        onChange={onChange}
                        value={form.sexo}
                        >
                            <option>F</option>
                            <option>M</option>
                        </Form.Group>
                        </div>

                        <div>
                            <Form.Group style={{width:'50%'}}>
                                <Form.Label>Data de Nascimento</Form.Label>
                                <Form.Control 
                                value={form.data_nascimento}
                                name="data_nascimento" 
                                type="date" 
                                placeholder="Digite o seu CPF" 
                                onChange={onChange}/>
                            </Form.Group>
                        </div>
                        <div>
                        <Form.Group>
                                <Form.Label>Senha</Form.Label>
                                <Form.Control 
                                value={form.senha}
                                name="senha" 
                                type="password" 
                                placeholder="Digite a senha do paciente" 
                                onChange={onChange}/>
                            </Form.Group>
                        </div>

                        <div>
                        <Form.Group >
                                <Form.Label>E-mail:</Form.Label>
                                <Form.Control 
                                value={form.email} 
                                name="email"
                                type="email" 
                                placeholder="Digite a senha do paciente" 
                                onChange={onChange}/>
                            </Form.Group>
                        </div>
                    
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={onSubmit}>Cadastrar</Button>
                        
                        
                    </Modal.Footer>
                    </Form>
            </Modal.Dialog>
        </Page>
    )
}

export default Recepcao;
