import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Main from './Main';
const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Looking for new ways to collaborate? -</a>
          <p>
            Find other artists to get in touch with Link Ups and keep your
            projects in motion.
          </p>
        </h5>
      </Section>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.section`
  color: #eee;
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #f5d654;
    font-size: 14px;
    a {
      font-weight: 300;
    }
    p {
      font-size: 14px;
      color: #eee;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0 5px;
    }
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: 'leftside main rightside';
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
