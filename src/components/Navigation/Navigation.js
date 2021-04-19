import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import AutNav from '../AutNav';
import s from './Navigation.module.css';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import UserMenu from '../UserMenu';
import selectors from '../../redux/auth/auth-selectors';

const Navigaton = ({ onAuth }) => (
  <Nav>
    <Nav.Item>
      {/* <Nav.Link eventKey="link-1"> */}
      <NavLink
        exact
        to={routes.home}
        activeClassName={s.activelink}
        className={s.link}
      >
        Home
      </NavLink>
      {/* </Nav.Link> */}
    </Nav.Item>
    <Nav.Item>
      {/* <Nav.Link eventKey="link-2"> */}
      <NavLink
        exact
        to={routes.contacts}
        activeClassName={s.activelink}
        className={s.link}
      >
        Contacts
      </NavLink>
      {/* </Nav.Link> */}
    </Nav.Item>
    {onAuth ? <UserMenu /> : <AutNav />}
  </Nav>
);

const mapStateToProps = state => ({
  onAuth: selectors.getAuth(state),
});

export default connect(mapStateToProps)(Navigaton);
