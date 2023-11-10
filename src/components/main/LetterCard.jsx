import { getDate } from '../../common/util';
import Avatar from '../Avatar';
import {
  StLetterCard,
  StLetterInfo,
} from '../../styles/main/StLetterCardComponent';

function LetterCard({ children }) {
  return (
    <StLetterCard>
      <Avatar imgPath={children.avatar} />
      <StLetterInfo>
        <h1>{children.nickname}</h1>
        <span>{getDate(children.createdAt)}</span>
        <span>{children.content.replaceAll('<br>', '')}</span>
      </StLetterInfo>
    </StLetterCard>
  );
}

export default LetterCard;
