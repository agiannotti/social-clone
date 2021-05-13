import styled from 'styled-components';
import VideoCallTwoToneIcon from '@material-ui/icons/VideoCallTwoTone';
import AddAPhotoTwoToneIcon from '@material-ui/icons/AddAPhotoTwoTone';
import AssignmentTwoToneIcon from '@material-ui/icons/AssignmentTwoTone';
import EventAvailableTwoToneIcon from '@material-ui/icons/EventAvailableTwoTone';
import user from '../images/user.svg';
import sharedImg from '../images/background.jpg';
import ThumbUpAltTwoTone from '@material-ui/icons/ThumbUpAlt';
import SentimentVerySatisfiedTwoToneIcon from '@material-ui/icons/SentimentVerySatisfiedTwoTone';
import CommentTwoToneIcon from '@material-ui/icons/CommentTwoTone';
import SendIcon from '@material-ui/icons/Send';
import LaunchIcon from '@material-ui/icons/Launch';
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
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src={user} alt='' />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>...</button>
          </SharedActor>
          <Description>Desc</Description>
          <SharedImg>
            <a>
              <img src={sharedImg} alt='' />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <ThumbUpAltTwoTone style={{ color: '#424242' }} />
                <SentimentVerySatisfiedTwoToneIcon
                  style={{ color: '#424242' }}
                />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <ThumbUpAltTwoTone />
              <span>Like</span>
            </button>
            <button>
              <CommentTwoToneIcon />
              <span>Comment</span>
            </button>
            <button>
              <LaunchIcon />
              <span>Share</span>
            </button>
            <button>
              <SendIcon />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
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

const Article = styled(CommonCard)`
  padding: 2px;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &::nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    border: 2px solid gray;
    border-radius: 12px;
    font-weight: 700;
    font-size: 30px;
    padding-bottom: 14px;
    text-align: center;
    width: 48px;
    height: 48px;
    position: absolute;
    right: 12px;
    top: 0;
    border: none;
    background: transparent;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #fff;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  list-style: none;
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid gray;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #424242;

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;
export default Main;
