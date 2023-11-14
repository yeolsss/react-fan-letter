import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getDate } from '../../common/util';
import Avatar from '../Avatar';
import {
  StLetterCard,
  StLetterInfo,
} from '../../styles/main/StLetterCardComponent';

function LetterCard({ children }) {
  const { currentMember } = useSelector((state) => state.member);
  return (
    <Link to={`/detail/${currentMember}/${children.id}`}>
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
