import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href='/'>
          <img src='../images/moon.png' alt='mo0n' />
        </a>
        <div>
          <Join>Join Now</Join>
        </div>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const Join = styled.a`
  color: black;
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 12px;
  &:hover {
    background-color: #efefef;
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
export default Login;
