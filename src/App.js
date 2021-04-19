import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from './routes';
import Container from './components/Container';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import operations from './redux/auth/auth-operation';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <Container>
          <AppBar />

          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route path={routes.register} component={RegisterView} />
            <Route path={routes.login} component={LoginView} />
            <Route path={routes.contacts} component={ContactsView} />
          </Switch>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: operations.getCurrentUserInfo,
};

export default connect(null, mapDispatchToProps)(App);
