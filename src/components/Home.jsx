import LetterForm from './main/LetterForm';
import LetterCard from './main/LetterCard';
import {
  StContainer,
  StEmptyDataLi,
  StLetterList,
} from '../styles/main/StHome';
import { useSelector } from 'react-redux';
import {
  ProgressCircle,
  ProgressInner,
  ProgressText,
  ProgressWrapper,
} from './ProgressCircle';
import { AnimationWrapper, LoadingText, TrainImage } from './TrainProgress';
import train from '../assets/free-icon-train-1008150.png';

function Home() {
  const member = useSelector((state) => state.member);
  const letters = useSelector((state) => state.letter);

  const currentMemberLetter = letters.filter(
    (letter) => letter.writedTo === member.currentMember,
  );
  return (
    <StContainer>
      <LetterForm />
      {/* <ProgressWrapper>
        <ProgressCircle />
        <ProgressInner />
        <ProgressText>로딩 중...</ProgressText>
      </ProgressWrapper>
      <>
        <AnimationWrapper>
          <TrainImage src={train} alt="Loading Train" />
          <LoadingText>Loading...</LoadingText>
        </AnimationWrapper>
      </> */}
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
