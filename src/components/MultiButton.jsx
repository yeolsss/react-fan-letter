import styled from 'styled-components';

function MultiButton({ name }) {
  return <StButton>{name}</StButton>;
}

const StButton = styled.button`
  width: 100%;
  height: 5rem;
  font-size: 2.4rem;
  font-weight: bold;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background-color: var(--bg-color);
  border: 1px solid var(--text-color);
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in;
  &:hover {
    background-color: var(--text-color);
    color: var(--bg-color);
  }
`;

export default MultiButton;
