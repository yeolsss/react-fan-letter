import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from './Avatar';
import {
  StButtonWrapper,
  StContentForm,
  StDetailContainer,
  StMemberNameWrapper,
  StWriterInfoWrapper,
} from '../styles/detail/StDetail';
import { validData } from '../common/util';
import { deleteLetter, updateLetter } from '../redux/config/module/letter.js';
import { setCurrentMember } from '../redux/config/module/member.js';

function Detail() {
  const { id: parmaId, memberId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentMember(memberId));
  }, []);

  const members = useSelector((state) => state.member);
  const letterList = useSelector((state) => state.letter);
  const letter = letterList.find((letter) => letter.id === parmaId);

  const { id, writedTo, nickname, content, createdAt, avatar } = letter;
  const member = members.getMembers[Number(writedTo)];
  const { name } = member;

  // * useHistory1
  const navigate = useNavigate();

  // * letter update textarea state
  const [letterUpdateContent, setLetterUpdateContent] = useState('');
  // * letter update btn state
  const [updateState, setUpdateState] = useState(false);

  const updateLetterContentRef = useRef(null);

  const handleOnSubmitDeleteLetter = (e) => {
    const { id } = e.target.dataset;
    dispatch(deleteLetter(id));
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

    const { id } = e.target.dataset;
    dispatch(
      updateLetter({
        id,
        content: letterUpdateContent.replaceAll('\n', '<br>'),
      }),
    );
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

const Button = ({ btnTitle, handler, dataId = '' }) => (
  <button data-id={dataId} onClick={handler}>
    {btnTitle}
  </button>
);
