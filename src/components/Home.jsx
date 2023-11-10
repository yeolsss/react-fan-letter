import LetterForm from './main/LetterForm';
import LetterCard from './main/LetterCard';
import {
  StContainer,
  StEmptyDataLi,
  StLetterList,
} from '../styles/main/StHome';

function Home({
  members,
  onSubmitLetter,
  handlers,
  states,
  memberSelectBox,
  refs,
  currentMemberLetter,
}) {
  return (
    <StContainer>
      <LetterForm
        members={members}
        onSubmitLetter={onSubmitLetter}
        handlers={handlers}
        states={states}
        memberSelectBox={memberSelectBox}
        refs={refs}
      />
      <StLetterList>
        {currentMemberLetter.length === 0 ? (
          <StEmptyDataLi>
            <h1>등록된 데이터가 없습니다.</h1>
          </StEmptyDataLi>
        ) : (
          currentMemberLetter.map((letter) => (
            <LetterCard key={letter.id}>{letter}</LetterCard>
          ))
        )}
      </StLetterList>
    </StContainer>
  );
}

export default Home;
