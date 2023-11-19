import { StAvatarWrapper } from '../styles/StAvatar';
import avatar from '../assets/download.png';

function Avatar({ imgPath }) {
  return (
    <StAvatarWrapper>
      <img src={imgPath !== '' ? imgPath : avatar} />
    </StAvatarWrapper>
  );
}

export default Avatar;
