import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class LoginComponent extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default LoginComponent;