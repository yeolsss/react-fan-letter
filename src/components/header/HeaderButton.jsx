import { StHeaderBtnLi } from '../../styles/header/StHeader';

function HeaderButton({ membersBtnSelector, children }) {
  const { memberSelector, handlerOnClickMemberSelector } = membersBtnSelector;

  return (
    <StHeaderBtnLi
      key={children.id}
      $thisMemberId={children.id === memberSelector}
    >
      <button onClick={() => handlerOnClickMemberSelector(children.id)}>
        {children.name}
      </button>
    </StHeaderBtnLi>
  );
}

export default HeaderButton;
