import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
    };
  }

  sendPropsToParent = (user, value) => {
    this.sendData(user);
    this.showComponent(value);
  };

  sendData = (user) => {
    this.props.getUser(user);
  };
  showComponent = (value) => {
    this.props.showComponent(value);
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/login', this.state);
      console.log(response);
      localStorage.setItem('token', response.data.token);
      this.sendPropsToParent(response.data.token, false);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Form.Group controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={this.handleEmailChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          onClick={this.sendPropsToParent}
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default LoginComponent;
