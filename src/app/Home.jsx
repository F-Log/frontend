import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-body">
      <div className="center-text">
        <p>기록과 피드백 더 나은 내일</p>
      </div>
      <div className="search-section">
        <button onClick={() => navigate('/search')} className="search-button">음식명 검색</button>
      </div>
      <div className="upload-section">
        <button onClick={() => navigate('/ocr')} className="upload-button">사진 업로드</button>
      </div>
      <div className="result-section">
        <button onClick={() => navigate('/result')} className="result-button">오늘의 결과</button>
      </div>
      
    </div>
  );
}

export default Home;