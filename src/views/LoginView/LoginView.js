import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import operation from '../../redux/auth/auth-operation';

export class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  hendleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  hendleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const LoginUser = {
      email,
      password,
    };
    this.props.onLogin(LoginUser);

    this.reset();
  };
  reset = () => {
    this.setState({
      email: '',
      password: '',
    });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.hendleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.hendleChange}
              name="email"
              value={this.state.email}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.hendleChange}
              name="password"
              value={this.state.password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onLogin: operation.login,
};
export default connect(null, mapDispatchToProps)(LoginView);
