import { useMatch } from 'react-router-dom';
import { StHeaderBtnLi } from '../../styles/header/StHeader';
import { useContext } from 'react';
import { LetterContext } from '../../context/LetterContext';

function HeaderButton({ children }) {
  const { memberSelector } = useContext(LetterContext);

  const match = useMatch('/detail/:id');

  const handlerOnClickMemberSelector = (id) => {
    memberSelector.setMemberSelector(id);
  };
  return (
    <StHeaderBtnLi
      key={children.id}
      $thisMemberId={children.id === memberSelector.memberSelector}
    >
      {!match ? (
        <button onClick={() => handlerOnClickMemberSelector(children.id)}>
          {children.name}
        </button>
      ) : (
        <button>{children.name}</button>
      )}
    </StHeaderBtnLi>
  );
}

export default HeaderButton;
