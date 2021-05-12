import styled from "styled-components";
import moon from "../../public/images/moon.png";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src={moon} />
        </a>
      </Nav>
    </Container>
  );
};

const Container = styled.div``;
const Nav = styled.div``;
export default Login;
