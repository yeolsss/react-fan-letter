import { Router } from './shared/Router';
import { getMembers } from './common/util';
import { useEffect, useState } from 'react';
import { StContainer } from './styles/Container';

function App() {
  /* 
    여기 굉장히 복잡해질 예정
  */
  // 용승, 진호, 명섭, 민석, 유나, 미래
  const [members, setMembers] = useState([]);
  const [memberSelector, setMemberSelector] = useState('1');

  // memberBtn onClick
  const handlerOnClickMemberSelector = (id) => {
    setMemberSelector(id);
  };

  // memberList useEffect
  useEffect(() => {
    setMembers(getMembers);
  }, []);

  return (
    <StContainer>
      <Router
        members={members}
        membersBtnSelector={{
          memberSelector,
          handlerOnClickMemberSelector,
          setMemberSelector,
        }}
      />
    </StContainer>
  );
}

export default App;
