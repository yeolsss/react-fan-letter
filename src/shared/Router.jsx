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
  validData,
} from '../common/util';
import dumyData from '../common/fakeData.json';

export const Router = ({ members, membersBtnSelector }) => {
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
    (letter) => letter.writedTo === membersBtnSelector.memberSelector,
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
    membersBtnSelector.setMemberSelector(memberId);
    setMemberSelectBox(memberId);
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
    const mumberId = membersBtnSelector.memberSelector;
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
    setMemberSelectBox(membersBtnSelector.memberSelector);
  }, [membersBtnSelector.memberSelector]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout members={members} membersBtnSelector={membersBtnSelector} />
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
                memberSelectBox={{ memberSelectBox, onChangeMemberSelectBox }}
                refs={{ letterNickNameRef, letterContentRef }}
                currentMemberLetter={currentMemberLetter}
              />
            }
          />
          <Route
            exact
            path="/detail/:id"
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
