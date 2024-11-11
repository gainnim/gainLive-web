import React from 'react';
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';
const Home = () => {
const navigate = useNavigate();
    return (
        <>
            <div className='Text' style={{position: 'absolute', width: '50%', top: '30%'}}>
                <span>"새로운 사람과의 랜덤 채팅"</span>
                <span>"45초 짧은 시간 채팅"</span>
                <button onClick={()=>navigate('chat')}>"채팅 시작"</button>
            </div>
            <Spline scene="https://prod.spline.design/klTPcT8rlztcPKJh/scene.splinecode" />
        </>
    );
};

export default Home;