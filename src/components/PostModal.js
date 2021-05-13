import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import user from '../images/user.svg';

const PostModal = () => {
  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <button>
            <CloseIcon />
          </button>
        </Header>
        <SharedContent>
          <UserInfo>
            <img src={user} alt='userLogo' />
            <span>Name</span>
          </UserInfo>
        </SharedContent>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  color: black;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: #fff;
  max-height: 90%;
  overflow: initial;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  background-color: #fff;
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border-radius: 4px;
    border: 2px;
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.7);
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

export default PostModal;
