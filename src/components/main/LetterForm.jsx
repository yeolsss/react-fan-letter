import styled from 'styled-components';

function LetterForm({ members }) {
  return (
    <StForm>
      <StSelector>
        <span>to:</span>
        <select>
          {members.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>
      </StSelector>
      <input type="text" />
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </StForm>
  );
}

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  font-size: 1.6rem;
  font-weight: bold;
`;
const StSelector = styled.div``;

export default LetterForm;
