import { connect } from 'react-redux';
import selectors from '../../redux/auth/auth-selectors';
import operation from '../../redux/auth/auth-operation';

const UserMenu = ({ name, onLogout }) => (
  <>
    {/* <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text> */}
    <p>Welcome, {name}</p>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
    {/* </Navbar.Text>
    </Navbar.Collapse> */}
  </>
);
const mapStateToProps = state => ({
  name: selectors.getName(state),
  onAuth: selectors.getAuth(state),
});

const mapDispatchToProps = {
  onLogout: operation.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
