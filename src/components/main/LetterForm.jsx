import MultiButton from '../MultiButton';
import { StForm, StSelector } from '../../styles/StInputForm';

function LetterForm({ ...props }) {
  const { members, onSubmitLetter, handlers, states, memberSelectBox, refs } =
    props;
  const { onChangeLetterContent, onChangeLetterNickName } = handlers;
  const { letterNickNameRef, letterContentRef } = refs;

  return (
    <StForm onSubmit={onSubmitLetter}>
      <StSelector>
        <span>to:</span>
        <select
          defaultValue={memberSelectBox.memberSelectBox}
          value={memberSelectBox.memberSelectBox}
          onChange={memberSelectBox.onChangeMemberSelectBox}
        >
          {members.map((member) => (
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
        value={states.letterNickName}
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
        value={states.letterContent}
        onChange={onChangeLetterContent}
        ref={letterContentRef}
        maxLength={100}
        placeholder="내용 : 최대 100글자까지 작성할 수 있습니다."
      ></textarea>
    </StForm>
  );
}

export default LetterForm;
