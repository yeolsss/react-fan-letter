import { getDate } from '../../common/util';
import Avatar from '../Avatar';
import {
  StLetterCard,
  StLetterInfo,
} from '../../styles/main/StLetterCardComponent';
import { Link } from 'react-router-dom';

function LetterCard({ memberSelector, children }) {
  return (
    <Link to={`/detail/${memberSelector}/${children.id}`}>
      <StLetterCard>
        <Avatar imgPath={children.avatar} />
        <StLetterInfo>
          <h1>{children.nickname}</h1>
          <span>{getDate(children.createdAt)}</span>
          <span>{children.content.replaceAll('<br>', '')}</span>
        </StLetterInfo>
      </StLetterCard>
    </Link>
  );
}

export default LetterCard;
