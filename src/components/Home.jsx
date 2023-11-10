import styled from 'styled-components';
import LetterForm from './main/LetterForm';

function Home({ members }) {
  return (
    <StContainer>
      <LetterForm members={members} />
    </StContainer>
  );
}

const StContainer = styled.section`
  margin-top: 10rem;
`;

export default Home;
