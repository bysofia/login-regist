import React from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import "../Assets/CSS/index.css";

const LoginForm = (props) => {
    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >    
      <Modal.Body>
      <Form style={{width: "500px auto", margin: "100px auto"}}>
            <h2 className="tex-center fw-bold" style={{color: "red"}}>Login</h2>
            <Form.Group className="my-3 mt-2">
                <Form.Label className="fw-semibold fs-5"></Form.Label>
                <Form.Control style={{border: "5", borderColor: "red"}} type="email" placeholder='Email' />
            </Form.Group>
            <Form.Group className="my-3">
                <Form.Label className="fw-semibold fs-5"></Form.Label>
                <Form.Control style={{border: "5", borderColor: "red"}} type="password" placeholder='Password' />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="danger" size="lg">
                    Login
                </Button>      
            </div>
            <div>
                <p>Don't have an account ? Klik <a href="/register">Here</a></p>                
            </div>
        </Form>
      </Modal.Body>
      
    </Modal>
        
    );
};

export default LoginForm;