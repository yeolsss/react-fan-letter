import styled from 'styled-components';

export const StForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  font-weight: bold;
  > input {
    width: 100%;
    height: 5rem;
    font-size: 2.4rem;
    font-weight: bold;
    border-radius: 0.5rem;
    padding: 0 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
  }
  > textarea {
    width: 100%;
    height: 20rem;
    font-size: 2.4rem;
    font-weight: bold;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
    box-sizing: border-box;
  }
`;
export const StSelector = styled.div`
  margin-bottom: 1rem;
  position: relative;
  > span {
    font-size: 2.4rem;
    font-weight: bold;
    margin-right: 1rem;
  }
  > select {
    width: 20%;
    height: 5rem;
    font-size: 2.4rem;
    font-weight: bold;
    text-align: center;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  > div {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10rem;
    padding: 1rem 0;
  }
`;
