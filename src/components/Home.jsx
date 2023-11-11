import LetterForm from './main/LetterForm';
import LetterCard from './main/LetterCard';
import {
  StContainer,
  StEmptyDataLi,
  StLetterList,
} from '../styles/main/StHome';
import { useContext } from 'react';
import { LetterContext } from '../context/LetterContext';

function Home() {
  const { memberSelector, letterList } = useContext(LetterContext);
  const getLetterList = letterList.letterList;
  const currentMemberLetter = getLetterList.filter(
    (letter) => letter.writedTo === memberSelector.memberSelector,
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
