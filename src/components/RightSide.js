import styled from 'styled-components';
import feedIcon from '../images/feed-icon.svg';
import rightIcon from '../images/right-icon.svg';

const RightSide = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src={feedIcon} alt='' />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
              <div>
                <span>#Socials</span>
                <button>Follow</button>
              </div>
            </a>
          </li>
          <li>
            <a>
              <Avatar />
              <div>
                <span>#video</span>
                <button>Follow</button>
              </div>
            </a>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations <img src={rightIcon} alt='rightIcon' />
        </Recommendation>
      </FollowCard>
      {/* <BannerCard><img src= alt="" /></BannerCard> */}
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 15px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;
const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;
const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.8);

    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgb(0, 0, 0, 0.6);
      padding: 12px;
      align-items: center;
      border-radius: 12px;
      box-sizing: border-box;
      font-weight: 600;
      display: flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
      border: 2px;

      &:hover {
        background-color: rgb(0, 0, 0, 0.08);
      }
    }
  }
`;
const Avatar = styled.div`
  background-image: url() ();
`;
const Recommendation = styled.a`
  color: #f5d654;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default RightSide;
