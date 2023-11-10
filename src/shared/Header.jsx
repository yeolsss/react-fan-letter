import HeaderButton from '../components/header/HeaderButton';
import { StHeader, StNav } from '../styles/header/StHeader';

function Header({ members, membersBtnSelector }) {
  // 용승, 진호, 명섭, 민석, 유나, 미래

  return (
    <StHeader>
      <h1>판교행버스</h1>
      <StNav>
        <ul>
          {members.map((member) => (
            <HeaderButton
              key={member.id}
              membersBtnSelector={membersBtnSelector}
            >
              {member}
            </HeaderButton>
          ))}
        </ul>
      </StNav>
    </StHeader>
  );
}

export default Header;
