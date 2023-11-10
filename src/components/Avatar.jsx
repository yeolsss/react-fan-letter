import { StAvatarWrapper } from '../styles/StAvatar';

function Avatar({ imgPath }) {
  return (
    <StAvatarWrapper>
      <img src={imgPath !== '' ? imgPath : '/src/assets/download.png'} />
    </StAvatarWrapper>
  );
}

export default Avatar;
