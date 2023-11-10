import styled from 'styled-components';
import LetterForm from './main/LetterForm';

function Home({ members, onSubmitLetter, handlers, states, memberSelectBox }) {
  return (
    <StContainer>
      <LetterForm
        members={members}
        onSubmitLetter={onSubmitLetter}
        handlers={handlers}
        states={states}
        memberSelectBox={memberSelectBox}
      />
    </StContainer>
  );
}

const StContainer = styled.section`
  margin-top: 10rem;
`;

export default Home;
