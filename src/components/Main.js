import styled from 'styled-components';
import VideoCallTwoToneIcon from '@material-ui/icons/VideoCallTwoTone';
import AddAPhotoTwoToneIcon from '@material-ui/icons/AddAPhotoTwoTone';
import AssignmentTwoToneIcon from '@material-ui/icons/AssignmentTwoTone';
import EventAvailableTwoToneIcon from '@material-ui/icons/EventAvailableTwoTone';
import user from '../images/user.svg';

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src={user} alt='' />
          <button>Create a post</button>
        </div>
        <div>
          <button>
            <a>
              <AddAPhotoTwoToneIcon style={{ color: 'blue' }} />
            </a>
            <span>Photo</span>
          </button>
          <button>
            <a>
              <VideoCallTwoToneIcon style={{ color: 'green' }} />
            </a>
            <span>Video</span>
          </button>
          <button>
            <a>
              <AssignmentTwoToneIcon style={{ color: 'orange' }} />
            </a>
            <span>Article</span>
          </button>
          <button>
            <a>
              <EventAvailableTwoToneIcon style={{ color: 'red' }} />
            </a>
            <span>Event</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 12px;
  position: relative;
  border: none;
  box-shadow: inset 0 0 0 1px rgb(0, 0, 0, 0.6);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgb(0, 0, 0, 0.6);
      font-size: 14px;
      font-weight: 600;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 15px;
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 4px 12px;

      button {
        a {
          margin: 4px 8px 0 0;
        }
        span {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
`;
export default Main;
