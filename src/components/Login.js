import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="../images/moon.png" alt="mo0n" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>Section</Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.div`
  max-width: 1200px;
  color: white;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const Join = styled.a`
  border: 1px solid gray;
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  margin-right: 12px;
  border-radius: 12px;
  &:hover {
    background-color: #efefef;
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #f5d654;
  color: #f5d654;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: #f5d654;
    color: black;
    opacity: 0.8;
    text-decoration: none;
  }
`;
const Section = styled.section`
  display: flex;
  min-height: 700px;
  align-content: start;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%:
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media(max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
export default Login;
