import styled from 'styled-components';

export const StLetterCard = styled.li`
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  height: auto;
  padding: 2rem;
  box-sizing: border-box;
  color: var(--text-color);
  cursor: pointer;
  column-gap: 1.5rem;
  align-items: center;
  transition:
    background-color 0.2s ease-in,
    color 0.2s ease-in;

  &:hover {
    background-color: var(--text-color);
    box-shadow: inset 0 0 1rem var(--bg-color);

    > div:last-child h1,
    span,
    p {
      color: var(--bg-color);
    }
  }
`;

export const StLetterInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  row-gap: 1rem;
  > h1,
  span,
  p {
    font-size: 2.4rem;
    color: var(--text-color);
  }

  > h1 {
    font-size: 4rem;
  }

  > span:last-child {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;
