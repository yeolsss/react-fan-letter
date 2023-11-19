import styled from 'styled-components';

export const StDetailContainer = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  > div {
    max-width: 80rem;
    min-width: 60rem;
    width: 100%;
    max-height: 70rem;
    min-height: 30rem;
    height: auto;
    margin: auto;
    padding: 3rem;
    box-sizing: border-box;
    box-shadow: inset 0 0 0.2rem var(--text-color);
    border-radius: 0.5rem;
  }
`;

export const StWriterInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.4rem;
  font-weight: bold;
  > div {
    display: flex;
    align-items: center;
    > h1 {
      margin-left: 1.5rem;
    }
  }
`;

export const StContentForm = styled.form`
  margin: 3rem 0;
  background-color: var(--text-color);
  padding: 2rem;
  height: 20rem;
  border-radius: 0.5rem;
  > p {
    color: var(--bg-color);
    font-size: 2.4rem;
    line-height: 1.5;
    overflow: scroll;
    white-space: pre-wrap;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  > textarea {
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-size: 2.4rem;
    line-height: 1.5;
    resize: none;
    border: none;
    outline: none;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  > button {
    width: 10rem;
    height: 5rem;
    border-radius: 0.5rem;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-size: 2.4rem;
    font-weight: bold;
    margin-left: 1rem;
    transition:
      background-color 0.2s ease-in,
      color 0.2s ease-in;
    &:hover {
      background-color: var(--text-color);
      color: var(--bg-color);
    }
  }
`;

export const StMemberNameWrapper = styled.div`
  margin: 2rem 0 1rem;
  > span {
    margin-left: 1.5rem;
    font-size: 2.4rem;
    font-weight: bold;
  }
`;
