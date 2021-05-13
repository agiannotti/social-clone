import styled from 'styled-components';
import pattern from '../images/pattern2.jpg';
import photo from '../images/cam1.png';
import widget from '../images/widget-icon.svg';
import itemIcon from '../images/item-icon.svg';
import plusIcon from '../images/plus-icon.svg';

const LeftSide = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome!</Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Expand your collaborations</span>
            </div>
            <img src={widget} alt='widgetIcon' />
          </a>
        </Widget>
        <Item>
          <span>
            <img src={itemIcon} alt='itemIcon' />
            Ideas
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src={plusIcon} alt='' />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover More</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
`;
const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 16px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;
const CardBackground = styled.div`
  background-image: url(${pattern});
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  box-shadow: none;
  background-image: url(${photo});
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border-radius: 25px;
  border: 2px solid #424242;
  margin: -38px auto 12px;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 700;
  color: rgb(0, 0, 0, 0.8);
`;
const AddPhotoText = styled.div`
  /* color this l8r */
  color: rgb(0, 0, 0, 0.75);
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 500;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.33;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
`;
const Item = styled.div`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  padding: 15px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 4px 15px;
    font-size: 12px;

    &:hover {
      color: #f5d654;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.8);
      text-decoration: none;

      border-top: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

export default LeftSide;
