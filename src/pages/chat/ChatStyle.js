import styled from 'styled-components';

// 채팅 컨테이너 스타일
export const ChatContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 로고 스타일
export const Logo = styled.h1`
  font-size: 2rem;
  color: #4CAF50;
  margin-bottom: 20px;
  text-align: center;
`;

// 매칭 시작 버튼 스타일
export const MatchButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: #45a049;
  }
`;

// 채팅방 헤더 스타일
export const ChatHeader = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

// 메시지 리스트 스타일
export const MessageList = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 10px;
  border-bottom: 1px solid #ddd;
`;

// 개별 메시지 스타일
export const Message = styled.div`
  padding: 5px 10px;
  margin-bottom: 10px;
  background-color: ${({ from }) => (from === "나" ? "#d1ffd6" : "#f0f0f0")};
  border-radius: 5px;
  max-width: 75%;
  align-self: ${({ from }) => (from === "나" ? "flex-end" : "flex-start")};
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

// 메시지 전송 입력 필드 스타일
export const MessageInput = styled.input`
  width: 75%;
  padding: 14px 20px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 50px;
  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

// 전송 버튼 스타일 (아이콘으로 변경)
export const SendButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .material-icons {
    font-size: 30px; /* 아이콘 크기 */
    color: #4CAF50; /* 아이콘 색상 */
  }

  &:hover {
    opacity: 0.8;
  }
`;

// 입력 필드와 버튼을 포함하는 컨테이너 스타일
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
  padding: 0 10%;

`;

export const ChatingContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-end;
`;
