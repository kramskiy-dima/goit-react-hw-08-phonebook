import Navigaton from '../Navigation';
import { Navbar, Container } from 'react-bootstrap';

const AppBar = () => {
  return (
    <>
      <Container>
        <Navbar>
          <Navigaton />
          {/* <UserMenu /> */}
        </Navbar>
      </Container>
    </>
  );
};

export default AppBar;
