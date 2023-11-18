import styled, { keyframes } from 'styled-components';

// 오른쪽에서 왼쪽으로 기차가 이동하도록 애니메이션을 정의합니다.
export const moveTrain = keyframes`
  0% {
    transform: translateX(100vw) scaleX(-1); // 시작점 (화면 오른쪽 바깥)
  }
  50%{
    transform: translateX(0) scaleX(-1); // 종료점 (화면 왼쪽 바깥)
  }
  51%{
    transform: translateX(0) scaleX(1);
  }

  100% {
    transform: translateX(100vw) scaleX(1); // 종료점 (화면 왼쪽 바깥)
  }
`;

export const moveText = keyframes`
  0% {
    transform: translateX(100vw) ; // 시작점 (화면 오른쪽 바깥)
  }
  100% {
    transform: translateX(0) ; // 종료점 (화면 왼쪽 바깥)
  }
`;

// 기차 이미지 스타일링
export const TrainImage = styled.img`
  width: 150px; // 이미지의 크기에 맞게 조정
  height: auto;

  animation: ${moveTrain} 5s linear infinite; // 무한 반복
`;

// 로딩 텍스트 스타일링
export const LoadingText = styled.div`
  color: #000;
  font-size: 2.4rem; // 텍스트 크기 조정
  font-weight: bold;
  white-space: nowrap; // 텍스트가 줄바꿈되지 않도록
  position: absolute;
  left: 2rem;
  bottom: 0; // 기차 이미지 아래에 위치
  transform: translateX(100%); // 시작점 (화면 오른쪽 바깥)
  animation: ${moveText} 5s linear infinite; // 무한 반복
`;

// 애니메이션을 담을 컨테이너
export const AnimationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 150px; // 기차 이미지와 텍스트에 충분한 공간을 확보
  overflow: hidden; // 화면 밖으로 나간 이미지는 숨김
`;
