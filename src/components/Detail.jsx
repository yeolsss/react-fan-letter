import { useNavigate, useParams } from 'react-router-dom';
import Avatar from './Avatar';
import { useContext, useEffect, useRef, useState } from 'react';
import {
  StButtonWrapper,
  StContentForm,
  StDetailContainer,
  StMemberNameWrapper,
  StWriterInfoWrapper,
} from '../styles/detail/StDetail';
import { LetterContext } from '../context/LetterContext';
import { LETTER_LOCAL_STORAGE_KEY, validData } from '../common/util';

function Detail() {
  const { id: parmaId } = useParams();
  const { members, letterList } = useContext(LetterContext);

  const letter = letterList.letterList.find((letter) => letter.id === parmaId);

  const { id, writedTo, nickname, content, createdAt, avatar } = letter;
  const member = members.members[Number(writedTo)];
  const { name } = member;

  // * useHistory1
  const navigate = useNavigate();

  // * letter update textarea state
  const [letterUpdateContent, setLetterUpdateContent] = useState('');
  // * letter update btn state
  const [updateState, setUpdateState] = useState(false);

  const updateLetterContentRef = useRef(null);

  const handleOnSubmitDeleteLetter = (e) => {
    const id = e.target.dataset.id;

    const newLetterList = letterList.letterList.filter(
      (letter) => letter.id !== id,
    );
    localStorage.setItem(
      LETTER_LOCAL_STORAGE_KEY,
      JSON.stringify(newLetterList),
    );
    letterList.setLetterList([...newLetterList]);
    alert('삭제되었습니다.');

    navigate('/');
  };
  // letter 수정
  const handleOnChangeUpdateLetter = (e) => {
    setLetterUpdateContent(e.target.value);
  };

  const handleOnSubmitUpdateLetter = (e) => {
    e.preventDefault();
    if (validData(letterUpdateContent, '내용', updateLetterContentRef)) return;

    const id = e.target.dataset.id;

    const newLetterList = letterList.letterList.map((letter) => {
      if (letter.id === id) {
        letter.content = letterUpdateContent.replaceAll('\n', '<br>');
      }
      return letter;
    });
    localStorage.setItem(
      LETTER_LOCAL_STORAGE_KEY,
      JSON.stringify(newLetterList),
    );
    letterList.setLetterList([...newLetterList]);
    setUpdateState(false);
  };

  // letter 수정 버튼
  const handleOnClickUpdateBtn = () => {
    setUpdateState(true);
  };

  useEffect(() => {
    setLetterUpdateContent(content.replaceAll('<br>', '\n'));
  }, []);

  return (
    <StDetailContainer>
      <div>
        <StWriterInfoWrapper>
          <div>
            <Avatar imgPath={avatar} />
            <h1>{nickname}</h1>
          </div>
          <span> {createdAt}</span>
        </StWriterInfoWrapper>

        <StMemberNameWrapper>
          <span>to: {name}</span>
        </StMemberNameWrapper>

        <StContentForm>
          {updateState ? (
            <textarea
              maxLength={100}
              value={letterUpdateContent}
              onChange={handleOnChangeUpdateLetter}
              ref={updateLetterContentRef}
            ></textarea>
          ) : (
            <p>{content.replaceAll('<br>', '\n')}</p>
          )}
        </StContentForm>
        <StButtonWrapper>
          {updateState ? (
            <Button
              dataId={id}
              handler={handleOnSubmitUpdateLetter}
              btnTitle={'완료'}
            />
          ) : (
            <Button btnTitle={'수정'} handler={handleOnClickUpdateBtn} />
          )}

          <Button
            dataId={id}
            btnTitle={'삭제'}
            handler={handleOnSubmitDeleteLetter}
          />
        </StButtonWrapper>
      </div>
    </StDetailContainer>
  );
}

export default Detail;

const Button = ({ btnTitle, handler, dataId = '' }) => {
  return (
    <button data-id={dataId} onClick={handler}>
      {btnTitle}
    </button>
  );
};
