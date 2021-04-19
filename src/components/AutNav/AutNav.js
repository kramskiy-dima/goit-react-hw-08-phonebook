import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './AutNav.module.css';
import { Nav } from 'react-bootstrap';

const AutNav = () => (
  <>
    <Nav.Item>
      <NavLink
        to={routes.login}
        activeClassName={s.activelink}
        className={s.link}
      >
        Login
      </NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink
        to={routes.register}
        activeClassName={s.activelink}
        className={s.link}
      >
        Register
      </NavLink>
    </Nav.Item>
  </>
);

export default AutNav;
