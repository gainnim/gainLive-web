import React from 'react';
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';
import * as M from "./HomeStyle";


const Home = () => {
    const navigate = useNavigate();
    
    return (
        <>
        <M.NavBar>
                <M.Logo1>logo</M.Logo1>
                
                <M.NvDiv>
                    <M.NvButton onClick={() => navigate('/')}>Home</M.NvButton>
                    <M.NvButton onClick={() => navigate('/chat')}>채팅</M.NvButton>
                </M.NvDiv>
            </M.NavBar>
            <M.TextContainer>
                <M.Text1>새로운 사람과의 랜덤 채팅</M.Text1>
                <M.Text2>45초 짧은 시간 채팅</M.Text2>
                <M.StartButton onClick={() => navigate('chat')}>채팅 시작</M.StartButton>
            </M.TextContainer>
            <Spline scene="https://prod.spline.design/Cm86VOjJjIZqK2y5/scene.splinecode" />
            </>
    );
};

export default Home;