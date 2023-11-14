import React from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderButton from '../components/header/HeaderButton';
import { StHeader, StHomeBtn, StNav } from '../styles/header/StHeader';
import { DETAIL_PATH } from '../common/util';

function Header() {
  const member = useSelector((state) => state.member);
  const navigate = useNavigate();
  const match = useMatch(DETAIL_PATH);

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
          {member.getMembers.map((member) => (
            <HeaderButton key={member.id}>{member}</HeaderButton>
          ))}
        </ul>
      </StNav>
    </StHeader>
  );
}

export default React.memo(Header);
