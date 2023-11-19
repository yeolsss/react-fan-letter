import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Home from '../components/Home';
import Detail from '../components/Detail';
import Layout from '../pages/Layout';
import {
  LETTER_LOCAL_STORAGE_KEY,
  Letter,
  getDate,
  getMembers,
  validData,
} from '../common/util';
import dumyData from '../common/fakeData.json';

export const Router = () => {
  /* 
    여기 굉장히 복잡해질 예정
    모든 것이 모여있다....
    물류 창고가 되어버렸다..
    사실 이렇게 까지 할 필요는 없었지만..
    어차피 드릴링 경험할꺼 극한으로 해보자는 생각으로
    한곳에 다 때려박았다..
  */

  // 판교행 버스 멤버가 담길 state
  const [members, setMembers] = useState([]);
  // 선택된 멤버 state
  const [memberSelector, setMemberSelector] = useState('0');

  /**
   * 멤버 선택(버튼, selectbox) 핸들러
   * @param {*} id // 선택된 멤버 id
   */
  const handlerOnClickMemberSelector = (id) => {
    setMemberSelector(id);
  };

  // memberList useEffect
  useEffect(() => {
    setMembers(getMembers);
  }, []);

  // * letter NickName state
  const [letterNickName, setLetterNickName] = useState('');
  // * letter content state
  const [letterContent, setLetterContent] = useState('');
  // * member selectbox state 멤버 셀렉트 박스 선택
  const [memberSelectBox, setMemberSelectBox] = useState();
  // * letter update textarea state
  const [letterUpdateContent, setLetterUpdateContent] = useState('');
  // * letter update btn state
  const [updateState, setUpdateState] = useState(false);

  // * set ref
  const letterNickNameRef = useRef(null);
  const letterContentRef = useRef(null);
  const updateLetterContentRef = useRef(null);

  // ! localStorage get data
  // ! 빈 값일 경우 dumyData로 초기화
  const letters =
    JSON.parse(localStorage.getItem(LETTER_LOCAL_STORAGE_KEY)) || dumyData;

  const [letterList, setLetterList] = useState(letters);

  const currentMemberLetter = letterList.filter(
    (letter) => letter.writedTo === memberSelector,
  );

  const onChangeLetterNickName = (e) => {
    setLetterNickName(e.target.value);
  };
  const onChangeLetterContent = (e) => {
    setLetterContent(e.target.value);
  };

  // selectbox controll
  const onChangeMemberSelectBox = (e) => {
    const memberId = e.target.value;
    setMemberSelector(memberId);
  };

  // letter 등록
  const onSubmitLetter = (e) => {
    e.preventDefault();

    // 빈값 유효성 검사
    if (
      validData(letterNickName, '이름', letterNickNameRef) ||
      validData(letterContent, '내용', letterContentRef)
    )
      return;

    const id = uuidv4();
    const mumberId = memberSelector;

    const letter = new Letter(
      id,
      mumberId,
      letterNickName,
      letterContent.replaceAll('\n', '<br>'),
      getDate(),
    );

    const newLetterList = [letter, ...letterList];
    localStorage.setItem(
      LETTER_LOCAL_STORAGE_KEY,
      JSON.stringify(newLetterList),
    );
    setLetterList(newLetterList);

    setLetterNickName('');
    setLetterContent('');
  };

  // letter 수정 버튼
  const handleOnClickUpdateBtn = () => {
    setUpdateState(true);
  };

  // letter 수정
  const handleOnChangeUpdateLetter = (e) => {
    setLetterUpdateContent(e.target.value);
  };

  // letter 수정 submit
  const handleOnSubmitUpdateLetter = (e) => {
    e.preventDefault();
    if (validData(letterUpdateContent, '내용', updateLetterContentRef)) return;

    const { id } = e.target.dataset;

    const newLetterList = letterList.map((letter) => {
      if (letter.id === id) {
        letter.content = letterUpdateContent.replaceAll('\n', '<br>');
      }
      return letter;
    });
    localStorage.setItem(
      LETTER_LOCAL_STORAGE_KEY,
      JSON.stringify(newLetterList),
    );
    setLetterList([...newLetterList]);
    setUpdateState(false);
  };

  // 삭제
  const handleDeleteBtn = (id) => {
    const newLetterList = letterList.filter((letter) => letter.id !== id);
    localStorage.setItem(
      LETTER_LOCAL_STORAGE_KEY,
      JSON.stringify(newLetterList),
    );
    setLetterList([...newLetterList]);
    alert('삭제되었습니다.');
  };

  useEffect(() => {
    setMemberSelectBox(memberSelector);
  }, [memberSelector]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              members={members}
              membersBtnSelector={{
                memberSelector,
                handlerOnClickMemberSelector,
              }}
            />
          }
        >
          <Route
            exact
            path="/"
            element={
              <Home
                members={members}
                onSubmitLetter={onSubmitLetter}
                handlers={{ onChangeLetterNickName, onChangeLetterContent }}
                states={{ letterNickName, letterContent }}
                memberSelectBox={{
                  memberSelectBox,
                  onChangeMemberSelectBox,
                  memberSelector,
                }}
                refs={{ letterNickNameRef, letterContentRef }}
                currentMemberLetter={currentMemberLetter}
              />
            }
          />
          <Route
            exact
            path="/detail/:memberId/:id"
            element={
              <Detail
                members={members}
                currentMemberLetter={currentMemberLetter}
                updateProps={{
                  letterUpdateContent,
                  handleOnChangeUpdateLetter,
                  setLetterUpdateContent,
                  updateLetterContentRef,
                  handleOnSubmitUpdateLetter,
                  handleOnClickUpdateBtn,
                  updateState,
                }}
                handleDeleteBtn={handleDeleteBtn}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
