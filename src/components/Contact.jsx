import {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.jpg";


export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({...formDetails, [category]: value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:3000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

    return (
     <section className="contact" id = "connect">
        <Container>
            <Row className= "align-items-center">
                <Col md = {6}>
                    <img src = {contactImg} alt = "Contact Us"/>
                </Col>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col sm = {6} className = "px-1">
                            <input type = "text" placeholder = "First Name" value = {formDetails.firstName} onChange = {(e) => onFormUpdate({...formDetails, firstName: e.target.value})}/>
                        </Col>
                        <Col sm = {6} className = "px-1">
                            <input type = "text" placeholder = "Last Name" value = {formDetails.lastName} onChange = {(e) => onFormUpdate({...formDetails, lastName: e.target.value})}/>
                        </Col>
                        <Col sm = {6} className = "px-1">
                            <input type = "email" placeholder = "Email" value = {formDetails.email} onChange = {(e) => onFormUpdate({...formDetails, email: e.target.value})}/>
                        </Col>
                        <Col sm = {6} className = "px-1">
                            <textarea row = "6" value = {formDetails.message} placeholder = "Message" onChange = {(e) => onFormUpdate({...formDetails, message: e.target.value})}/>
                            <button type = "submit"><span>{buttonText}</span></button>
                        </Col>
                        {
                            status.message &&
                            <Col>
                                <p className = {status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                        }
                    </Row>
                </form>
                </Row>
        </Container>
        </section>
    );
}