import React, { useContext } from 'react';
import HeaderButton from '../components/header/HeaderButton';
import { StHeader, StHomeBtn, StNav } from '../styles/header/StHeader';
import { useMatch, useNavigate } from 'react-router-dom';
import { LetterContext } from '../context/LetterContext';

function Header() {
  // 용승, 진호, 명섭, 민석, 유나, 미래
  const navigate = useNavigate();
  const { members } = useContext(LetterContext);
  const match = useMatch('/detail/:id');
  const handleOnClickHomeBtn = () => {
    navigate('/');
  };

  return (
    <StHeader>
      {match && <StHomeBtn onClick={handleOnClickHomeBtn}>홈으로</StHomeBtn>}
      <h1>판교행버스</h1>
      <div>
        <div></div>
      </div>
      <StNav>
        <ul>
          {members.members.map((member) => (
            <HeaderButton key={member.id}>{member}</HeaderButton>
          ))}
        </ul>
      </StNav>
    </StHeader>
  );
}

export default React.memo(Header);
