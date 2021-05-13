import styled from 'styled-components';

import logo from '../images/google-logo.png';
import moon from '../images/moon.png';

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href='/'>
          <img src={moon} style={{ height: 45 }} alt='mo0n' />
        </a>
        <Socials>Socials.</Socials>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your creative community. </h1>
          {/* <img src="/images/login-hero.svg" alt="" /> */}
        </Hero>
        <Form>
          <Google>
            <img src={logo} alt='google' />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};
const Socials = styled.h1`
  padding: 8px;
  margin-right: auto;
`;

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
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #f5d654;
    font-weight: 200;
    line-height: 75px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 50px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  display: flex;
  justify-content: center;
  margin: auto;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  /* temp  */
  margin-top: 450px;
  /* temp */
  height: 56px;
  width: 100%;
  border: 2px solid gray;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rbg(0 0 0 / 60%),
    inset 0 0 0 2px rbg(0 0 0 / 0%) inset 0 0 0 1px rbg(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.99);
    color: rgba(0, 0, 0, 0.75);
  }
  img {
    height: 24px;
    padding: 4px;
  }
`;

export default Login;
