import styled from 'styled-components';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import InsertPhotoTwoToneIcon from '@material-ui/icons/InsertPhotoTwoTone';
import VideoCallTwoToneIcon from '@material-ui/icons/VideoCallTwoTone';
import AddCommentTwoToneIcon from '@material-ui/icons/AddCommentTwoTone';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { postArticleAPI } from '../actions';

const PostModal = (props) => {
  const [editorText, setEditorText] = useState('');
  const [shareImage, setShareImage] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [assetArea, setAssetArea] = useState('');

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === '' || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const switchAssetArea = (area) => {
    setShareImage('');
    setVideoLink('');
    setAssetArea(area);
  };

  const postArticle = (e) => {
    console.log('asdasdasd');
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      console.log('asdasdasd');

      return;
    }

    props.postArticle(payload);
    reset(e);
  };

  const payload = {
    image: shareImage,
    video: videoLink,
    user: props.user,
    description: editorText,
    timestamp: firebase.firestore.Timestamp.now(),
  };

  const reset = (e) => {
    setEditorText('');
    setShareImage('');
    setVideoLink('');
    setAssetArea('');
    props.handleClick(e);
  };
  return (
    <>
      {props.showModal === 'open' && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button
                onClick={(event) => {
                  reset(event);
                }}
              >
                <CloseIcon />
              </button>
            </Header>
            <ShareContent>
              <UserInfo>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} alt='' />
                ) : (
                  <img src='../images/user.svg' alt='' />
                )}
                <span>{props.user.displayName}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder='What do you want to talk about?'
                  autoFocus={true}
                />
                {assetArea === 'image' ? (
                  <UploadImage>
                    <input
                      type='file'
                      accept='image/gif, image/jpeg, image/png'
                      name='image'
                      id='file'
                      style={{ display: 'none' }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor='file'>Select an image to share</label>{' '}
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} alt='' />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === 'media' && (
                    <>
                      <input
                        type='text'
                        placeholder='Please input a video link'
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer width='100%' url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </ShareContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea('image')}>
                  <InsertPhotoTwoToneIcon />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea('media')}>
                  <VideoCallTwoToneIcon />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <AddCommentTwoToneIcon />
                  Comment
                </AssetButton>
              </ShareComment>

              <PostButton
                disabled={!editorText ? true : false}
                onClick={(event) => postArticle(event)}
              >
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
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
  animation: fadeIn 0.3s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: #fff;
  max-height: 90%;
  overflow: initial;
  border-radius: 15px !important;
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
    svg,
    img {
      pointer-events: none;
    }
  }
`;

const ShareContent = styled.div`
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

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
`;
const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
    height: 40px;
  }
`;
const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    svg {
      margin-right: 5px;
      height: 35px;
    }
  }
`;
const PostButton = styled.button`
  min-width: 60px;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  background: ${(props) =>
    props.disabled ? 'rgba(0, 0, 0, 0.15)' : '#f5d654'};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? 'rgba(0, 0, 0, 0.35)' : '#f5d654'};
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;
const mapStateToProps = (user) => {
  return { user: user.userState.user };
};
const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => dispatch(postArticleAPI(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
