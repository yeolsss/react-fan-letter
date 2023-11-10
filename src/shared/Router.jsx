import Home from '../components/Home';
import Detail from '../components/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Letter } from '../common/util';

export const Router = ({ members, membersBtnSelector }) => {
  const [letterTitle, setLetterTitle] = useState('');
  const [letterContent, setLetterContent] = useState('');
  const [memberSelectBox, setMemberSelectBox] = useState();

  const onChangeLetterTitle = (e) => {
    setLetterTitle(e.target.value);
  };
  const onChangeLetterContent = (e) => {
    setLetterContent(e.target.value);
  };

  // letter 등록
  const onSubmitLetter = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const mumberId = membersBtnSelector.memberSelector;
    let letter = new Letter(id, mumberId, letterTitle, letterContent);
    console.log(letter);
  };

  // selectbox controll
  const onChangeMemberSelectBox = (e) => {
    const memberId = e.target.value;
    membersBtnSelector.setMemberSelector(memberId);
    setMemberSelectBox(memberId);
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
                handlers={{ onChangeLetterTitle, onChangeLetterContent }}
                states={{ letterTitle, letterContent }}
                memberSelectBox={{ memberSelectBox, onChangeMemberSelectBox }}
              />
            }
          />
          <Route exact path=":id" element={<Detail members={members} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
