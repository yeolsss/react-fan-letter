import LetterForm from './main/LetterForm';
import LetterCard from './main/LetterCard';
import {
  StContainer,
  StEmptyDataLi,
  StLetterList,
} from '../styles/main/StHome';
import { useSelector } from 'react-redux';

function Home() {
  const member = useSelector((state) => state.member);
  const letters = useSelector((state) => state.letter);

  const currentMemberLetter = letters.filter(
    (letter) => letter.writedTo === member.currentMember,
  );
  return (
    <StContainer>
      <LetterForm />
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
