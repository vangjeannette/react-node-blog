import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class SignUpComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };
  }

  sendData = (user) => {
    this.props.getUser(user);
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
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
      const response = await axios.post('/register', this.state);
      localStorage.setItem('token', response.data.token);
      this.sendData(response.data.token);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Form.Group controlId="signupUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username please !"
            onChange={this.handleUsernameChange}
          />
        </Form.Group>
        <Form.Group controlId="signupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={this.handleEmailChange}
          />
        </Form.Group>
        <Form.Group controlId="signupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <button onClick={this.sendData}>OK</button>
      </form>
    );
  }
}

export default SignUpComponent;
