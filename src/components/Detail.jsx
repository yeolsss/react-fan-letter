import { useNavigate, useParams } from 'react-router-dom';
import Avatar from './Avatar';
import { useEffect } from 'react';
import {
  StButtonWrapper,
  StContentForm,
  StDetailContainer,
  StMemberNameWrapper,
  StWriterInfoWrapper,
} from '../styles/detail/StDetail';

function Detail({
  members,
  currentMemberLetter,
  updateProps,
  handleDeleteBtn,
}) {
  const { id: parmaId } = useParams();
  const letter = currentMemberLetter.find((letter) => letter.id === parmaId);
  const { id, writedTo, nickname, content, createdAt, avatar } = letter;

  const member = members[Number(writedTo)];
  const { name } = member;

  // * useHistory
  const navigate = useNavigate();

  const handleOnSubmitDeleteLetter = (e) => {
    handleDeleteBtn(e.target.dataset.id);
    navigate('/');
  };

  useEffect(() => {
    updateProps.setLetterUpdateContent(content.replaceAll('<br>', '\n'));
  }, []);

  return (
    <StDetailContainer>
      <div>
        <StWriterInfoWrapper>
          <div>
            <Avatar imgPath={avatar} />
            <h1>{nickname}</h1>
          </div>
          <span> {getDate(createdAt)}</span>
        </StWriterInfoWrapper>

        <StMemberNameWrapper>
          <span>to: {name}</span>
        </StMemberNameWrapper>

        <StContentForm>
          {updateProps.updateState ? (
            <textarea
              maxLength={100}
              value={updateProps.letterUpdateContent}
              onChange={updateProps.handleOnChangeUpdateLetter}
              ref={updateProps.updateLetterContentRef}
            ></textarea>
          ) : (
            <p>{content.replaceAll('<br>', '\n')}</p>
          )}
        </StContentForm>
        <StButtonWrapper>
          {updateProps.updateState ? (
            <Button
              dataId={id}
              handler={updateProps.handleOnSubmitUpdateLetter}
              btnTitle={'완료'}
            />
          ) : (
            <Button
              btnTitle={'수정'}
              handler={updateProps.handleOnClickUpdateBtn}
            />
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
