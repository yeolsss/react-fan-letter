import Home from '../components/Home';
import Detail from '../components/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

  // ! localStorage get data
  // ! 빈 값일 경우 빈 배열로 초기화
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

  const letterNickNameRef = useRef(null);
  const letterContentRef = useRef(null);

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
    let letter = new Letter(
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
          <Route exact path=":id" element={<Detail members={members} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
