import { Router } from './shared/Router';
import { LETTER_LOCAL_STORAGE_KEY, getMembers } from './common/util';
import { useEffect, useState } from 'react';
import { StContainer } from './styles/Container';
import { LetterContext } from './context/LetterContext';

function App() {
  /* 
    여기 굉장히 복잡해질 예정
  */
  // 용승, 진호, 명섭, 민석, 유나, 미래
  const [members, setMembers] = useState([]);
  const [memberSelector, setMemberSelector] = useState('0');
  // ! localStorage get data
  // ! 빈 값일 경우 dumyData로 초기화
  const letters =
    JSON.parse(localStorage.getItem(LETTER_LOCAL_STORAGE_KEY)) || dumyData;

  const [letterList, setLetterList] = useState(letters);
  // memberList useEffect

  const stateObject = {
    members: {
      members,
      setMembers,
    },
    memberSelector: {
      memberSelector,
      setMemberSelector,
    },
    letterList: {
      letterList,
      setLetterList,
    },
  };
  return (
    <LetterContext.Provider value={stateObject}>
      <StContainer>
        <Router />
      </StContainer>
    </LetterContext.Provider>
  );
}

export default App;
