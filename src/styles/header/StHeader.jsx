import styled from 'styled-components';
import backImg from '../../assets/300px-Q486846_Pangyo_A01.png';

export const StHeader = styled.header`
  position: relative;

  > div {
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    width: 50%;
    height: 13rem;
    top: 6rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
  > div > div {
    background-image: url(${backImg});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: -24rem;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
  > h1 {
    margin: 8rem 0;
    text-align: center;
    font-size: 6rem;
    font-weight: bold;
  }
`;
export const StNav = styled.nav`
  > ul {
    display: flex;
    justify-content: center;
  }
`;

export const StHeaderBtnLi = styled.li`
  &:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
    overflow: hidden;
  }
  &:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
    overflow: hidden;
  }

  > button {
    font-size: 2.4rem;
    font-weight: bold;
    border: none;
    ${({ $thisMemberId }) =>
      $thisMemberId
        ? `background-color: var(--btn-selected); color: var(--text-color);`
        : `background-color: var(--text-color); color: var(--bg-color);`};

    padding: 1rem 2rem;
    cursor: pointer;
    transition:
      background-color 0.2s ease-in-out,
      color 0.2s ease-in;
    &:hover {
      background-color: var(--bg-color);
      color: var(--text-color);
    }
  }
`;

export const StHomeBtn = styled.button`
  position: absolute;
  top: 2rem;
  left: 40rem;
  font-size: 2rem;
  font-weight: bold;
  border: none;
  background-color: var(--text-color);
  color: var(--bg-color);
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in;
  &:hover {
    background-color: var(--bg-color);
    color: var(--text-color);
  }
`;
