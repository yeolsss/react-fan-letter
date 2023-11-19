import styled from 'styled-components';

export const StAvatarWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 50%;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
