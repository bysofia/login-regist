import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../Assets/CSS/index.css";


const RegisterForm = (props) => {
    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    > 
    <Modal.Body>
        <Form style={{width: "100px flex", margin: "100px auto"}}>
            <h2 className="tex-center fw-bold" style={{color: "red"}}>Register</h2>
            <Form.Group className="my-3 mt-4">
                <Form.Label className="fw-semibold fs-5"></Form.Label>
                <Form.Control style={{border: "5", borderColor: "red"}} type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="my-3">
                <Form.Label className="fw-semibold fs-5"></Form.Label>
                <Form.Control style={{border: "5", borderColor: "red"}} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="my-3">
                <Form.Label className="fw-semibold fs-5"></Form.Label>
                <Form.Control style={{border: "5", borderColor: "red"}} type="text" placeholder="Full Name" />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="danger" size="lg">
                    Register
                </Button>      
            </div>
            <div>
                <p>Already have an account ? Klik <a href="/login">Here</a></p>                
            </div>
        </Form>
    </Modal.Body>
    </Modal>
    );
};

export default RegisterForm;