import styled from 'styled-components';

export const StHeader = styled.header`
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
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in;
    &:hover {
      background-color: var(--bg-color);
      color: var(--text-color);
    }
  }
`;
