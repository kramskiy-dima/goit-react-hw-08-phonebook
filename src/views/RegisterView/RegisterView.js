import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import operation from '../../redux/auth/auth-operation';

export class RegisterView extends Component {
  state = {
    name: '',
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
    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password,
    };
    this.props.onRegister(newUser);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.hendleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={this.hendleChange}
              name="name"
              value={this.state.name}
              type="name"
              placeholder="Enter your name"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.hendleChange}
              name="email"
              value={this.state.email}
              type="email"
              placeholder="Enter email"
            />
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
  onRegister: operation.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
