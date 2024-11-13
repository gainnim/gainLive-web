import styled from "styled-components";

// 채팅 시작 버튼 스타일
export const StartButton = styled.button`
  background-color: #365AFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: Bold;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: #143CF4;
  }
`;

//  큰 텍스트 스타일
export const Text1 = styled.p`
  font-size: 50px;
  font-family: "PyeongChangPeace-Bold";
  margin-bottom: 20px;
`;

//  작은 텍스트 스타일
export const Text2 = styled.p`
  font-size: 30px;
  font-family: PyeongChangPeace-Light;
  border: none;
  margin-bottom: 40px;
`;

export const TextContainer = styled.div`
    position: absolute;
    padding-left: 120px;
    width: 50%;
    top: 30%;
`;

// 네비게이션 안에 버튼
export const NvButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

//네비게이션 버튼 div
export const NvDiv = styled.div`
    display: flex;
    gap: 15px;
    alignItems: center;
`;

export const Logo1 = styled.span`
    font-size: 20px;
    font-weight: bold;
    font-family:pretendard
`;

export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
`;

