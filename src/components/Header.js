import styled from 'styled-components';
import moon from '../images/dark-moon.svg';
import searchIcon from '../images/search-icon.svg';
import navHome from '../images/nav-home.svg';
import navJobs from '../images/nav-jobs.svg';
import navMessaging from '../images/nav-messaging.svg';
import navNetworks from '../images/nav-network.svg';
import navNotifications from '../images/nav-notifications.svg';
import navWork from '../images/nav-work.svg';
import user from '../images/user.svg';
import downIcon from '../images/down-icon.svg';
import { connect } from 'react-redux';
import { signOutApi } from '../actions';

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href='/home'>
            <img src={moon} style={{ height: 40 }} alt='home-moon' />
          </a>
        </Logo>
        {/* <Socials>Socials</Socials> */}

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
            <NavList className='active'>
              <a href='home'>
                <img src={navHome} alt='navHome' />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={navJobs} alt='navJobs' />
                <span>Link Ups</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={navMessaging} alt='navMessaging' />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={navNetworks} alt='navNetworks' />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src={navNotifications} alt='navNotifications' />
                <span>Alerts</span>
              </a>
            </NavList>
            <User>
              <a>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt='gmailPhoto' />
                ) : (
                  <img src={user} alt='user' />
                )}
                <span>
                  Me
                  <img src={downIcon} alt='userDown' />
                </span>
              </a>

              <SignOut onClick={() => props.signOut()}>
                <a>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src={navWork} alt='work' />
                <span>
                  Work
                  <img src={downIcon} alt='workDown' />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};
const Socials = styled.h1`
  padding: 8px;
  margin-right: auto;
`;

const Container = styled.div`
  background-color: #eee;
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
  margin-left: -18px;
  padding-right: 12px;
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

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: '';
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      margin-top: -3px;
      padding: 12px;
      align-items: center;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
  }
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
