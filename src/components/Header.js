import styled from 'styled-components';
import moon from '../images/moon.png';

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          {' '}
          <a href='/home'>
            <img src={moon} style={{ height: 65 }} alt='home-moon' />
          </a>
        </Logo>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #424242;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-left: -10px;
`;
export default Header;
