import MultiButton from '../MultiButton';
import { StForm, StSelector } from '../../styles/StInputForm';
import { useContext, useEffect, useRef, useState } from 'react';
import { LetterContext } from '../../context/LetterContext';
import {
  LETTER_LOCAL_STORAGE_KEY,
  Letter,
  getDate,
  validData,
} from '../../common/util';
import { v4 as uuidv4 } from 'uuid';

function LetterForm() {
  const { members, memberSelector, letterList } = useContext(LetterContext);
  // * letter NickName state
  const [letterNickName, setLetterNickName] = useState('');
  // * letter content state
  const [letterContent, setLetterContent] = useState('');
  // * member selectbox state 멤버 셀렉트 박스 선택
  const [memberSelectBox, setMemberSelectBox] = useState();

  // * set ref
  const letterNickNameRef = useRef(null);
  const letterContentRef = useRef(null);

  const onChangeLetterNickName = (e) => {
    setLetterNickName(e.target.value);
  };
  const onChangeLetterContent = (e) => {
    setLetterContent(e.target.value);
  };

  // selectbox controll
  const onChangeMemberSelectBox = (e) => {
    const memberId = e.target.value;
    data.memberSelector.setMemberSelector(memberId);
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
    const mumberId = memberSelector.memberSelector;
    let letter = new Letter(
      id,
      mumberId,
      letterNickName,
      letterContent.replaceAll('\n', '<br>'),
      getDate(),
    );
    const newLetterList = [letter, ...letterList.letterList];
    localStorage.setItem(
      LETTER_LOCAL_STORAGE_KEY,
      JSON.stringify(newLetterList),
    );
    letterList.setLetterList(newLetterList);

    setLetterNickName('');
    setLetterContent('');
  };

  useEffect(() => {
    setMemberSelectBox(memberSelector.memberSelector);
  }, [memberSelector.memberSelector]);
  return (
    <StForm onSubmit={onSubmitLetter}>
      <StSelector>
        <span>to:</span>
        <select
          defaultValue={memberSelectBox}
          value={memberSelectBox}
          onChange={onChangeMemberSelectBox}
        >
          {members.members.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>
        <div>
          <MultiButton name={'등록'} />
        </div>
      </StSelector>
      <input
        type="text"
        value={letterNickName}
        onChange={onChangeLetterNickName}
        ref={letterNickNameRef}
        maxLength={20}
        placeholder="닉네임 : 최대 20글자까지 작성할 수 있습니다."
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={letterContent}
        onChange={onChangeLetterContent}
        ref={letterContentRef}
        maxLength={100}
        placeholder="내용 : 최대 100글자까지 작성할 수 있습니다."
      ></textarea>
    </StForm>
  );
}

export default LetterForm;
