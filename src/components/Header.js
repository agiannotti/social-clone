import styled from 'styled-components';
import moon from '../images/moon.png';
import searchIcon from '../images/search-icon.svg';
import navHome from '../images/nav-home.svg';

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href='/home'>
            <img src={moon} style={{ height: 40 }} alt='home-moon' />
          </a>
        </Logo>
        <Search>
          <div>
            <input type='text' placeholder='Search' />
          </div>
          <SearchIcon>
            <img src={searchIcon} alt='searchIcon' />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <a>
                <img src={navHome} alt='' />
              </a>
            </NavList>
          </NavListWrap>
        </Nav>
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
  a {
    display: flex;
    align-items: center;
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: lightgray;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 500;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      outline: none;
      border-radius: 8px;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul``;
const NavList = styled.li``;

export default Header;
