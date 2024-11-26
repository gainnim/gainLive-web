import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import * as M from "./ChatStyle"; // 스타일드 컴포넌트 import

const SERVER_URL = "ws://3.15.17.37"; // 서버 주소

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [isMatched, setIsMatched] = useState(false);
  const [isMatching, setIsMatching] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
  const [inputPlaceholder, setInputPlaceholder] =
    useState("메시지를 입력하세요");

  useEffect(() => {
    // 소켓 연결 설정
    const newSocket = io(SERVER_URL);
    setSocket(newSocket);

    // 매칭 이벤트 처리
    newSocket.on("matched", () => {
      setIsMatched(true);
      console.log("매칭이 완료되었습니다. 채팅을 시작합니다.");
    });

    newSocket.on("duplicateMatch", () => {
      console.warn("이미 매칭 중입니다.");
      setIsMatching(true);
    });

    // 메시지 이벤트 처리
    newSocket.on("message", (message) => {
      setMessages((prev) => [...prev, { from: "상대방", text: message }]);
    });

    // 타임오버 이벤트 처리
    newSocket.on("timeover", () => {
      console.warn("채팅 시간이 초과되었습니다.");
    });

    // 연결 해제 이벤트 처리
    newSocket.on("disconnected", () => {
      console.warn("상대방이 연결을 끊었습니다.");
      setIsMatched(false);
    });

    // 컴포넌트 언마운트 시 소켓 연결 해제
    return () => newSocket.disconnect();
  }, []);

  useEffect(() => {
    if (isMatched === true) {
      setInputPlaceholder("메시지를 입력하세요");
    } else {
      setInputPlaceholder("매칭이 잡히면 챗팅을 시작 할 수 있습니다.");
    }
    if (isMatching) {
      let count = 1;
      const baseText = "매칭 중입니다";
      setInterval(() => {
        const dots = ".".repeat(count);
        setInputPlaceholder(baseText + dots);
        count = count === 3 ? 1 : count + 1;
      }, 500);
    }
  }, [isMatched, isMatching]);

  // 매칭 요청 함수
  const handleMatch = () => {
    if (socket) {
      socket.emit("match");
      console.log("매칭을 요청했습니다.");
    }
  };

  // 메시지 전송 함수
  const handleSendMessage = () => {
    if (socket && isMatched && input.trim() !== "") {
      socket.emit("message", input);
      setMessages((prev) => [...prev, { from: "나", text: input }]);
      setInput("");
    }
  };

  // Enter 키로 메시지 전송
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 기본 Enter 동작 방지 (줄 바꿈 방지)
      handleSendMessage();
    }
  };

  return (
    <M.ChatContainer>
      <M.Logo>로고</M.Logo>
      <M.MatchButton onClick={handleMatch}>매칭 시작</M.MatchButton>
      
      <M.ChatingContainer>
        <M.MessageList>
          {messages.map((msg, index) => (
            <M.Message key={index} from={msg.from}>
              <strong>{msg.from}:</strong> {msg.text}
            </M.Message>
          ))}
        </M.MessageList>
        <M.InputContainer>
          <M.MessageInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={inputPlaceholder}
            onKeyDown={handleKeyDown}
          />
          <M.SendButton onClick={handleSendMessage}>
            <span className="material-icons">send</span> {/* 구글 아이콘 */}
          </M.SendButton>
        </M.InputContainer>
      </M.ChatingContainer>
    </M.ChatContainer>
  );
};

export default Chat;
