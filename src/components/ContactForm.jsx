import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function ContactForm() {
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue('');
    setPasswordValue('');
    setMessageValue('');
    // keeps page from reloading
    if (inputValue) {
      alert(`Submitted: ${inputValue}`);
    } else {
      alert("Be sure to complete all fields before submitting!");
    }
  };

  return (
    <Form id='form' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address: </Form.Label>
        <Form.Control id='emailInput' className='formInput' type="email" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label id='passwordText'>Name: </Form.Label>
        <Form.Control className='formInput' type="text" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} placeholder="First and Last" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label id='messageText'>Message: </Form.Label>
        <Form.Control onChange={(e) => setMessageValue(e.target.value)} value={messageValue} className='formInput' as="textarea" rows={3} />
      </Form.Group>
      <Button id='submit' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
