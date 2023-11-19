import { useMatch } from 'react-router-dom';
import { StHeaderBtnLi } from '../../styles/header/StHeader';

function HeaderButton({ membersBtnSelector, children }) {
  const { memberSelector, handlerOnClickMemberSelector } = membersBtnSelector;
  const match = useMatch('/detail/:memberId/:id');

  return (
    <StHeaderBtnLi
      key={children.id}
      $thisMemberId={children.id === memberSelector}
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
