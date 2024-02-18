import React, { useState } from 'react';
import './Log.css'; 

const NutritionBar = ({ label, percentage }) => {
  const barBackground = percentage > 100 ? 'red' : 'grey';
  const barFill = percentage > 100 ? 'blue' : 'grey';
  const barFillWidth = percentage > 100 ? '100%' : `${percentage}%`;
  const barOverflowWidth = percentage > 200 ? '100%' : `${percentage - 100}%`;

  return (
    <div className="nutrition-bar-container">
      <span className="nutrition-bar-label">{label}</span>
      <div className="nutrition-bar">
        <div className="nutrition-bar-fill" style={{ width: barFillWidth, backgroundColor: barFill }}></div>
        {percentage > 100 && (
          <div className="nutrition-bar-overflow" style={{ width: barOverflowWidth, backgroundColor: barBackground }}></div>
        )}
      </div>
      <span className="nutrition-bar-percentage">{percentage}%</span>
    </div>
  );
};


const LogPage = () => {
  const [advice, setAdvice] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  

  const handleGenerateAdvice = (type) => {
    setAdvice(type === 'today' ? '오늘의 피드백입니다.' : '일주일의 피드백입니다.');
  };

  const handleGenerateRecommendations = () => {
    // 가상의 추천 식단 데이터
    const newRecommendations = [
      { name: '꽁치', image: 'kkongchi.jpg' },
      { name: '연어샐러드', image: 'salad.jpg' },
      { name: '견과류', image: 'nuts.jpg' },
      { name: '아보카도', image: 'avocado.jpg' },
      { name: '생선', image: 'fish.jpg' }
    ];
    setRecommendations(newRecommendations);
  };

  return (
    <div className="log-page">
      <h1>오늘의 결과를 확인하세요!</h1>
      <div className="nutrition-bars">
        {/* 가짜 데이터 */}
        <NutritionBar label="에너지" percentage={175} />
        <NutritionBar label="탄수화물" percentage={240} />
        <NutritionBar label="단백질" percentage={110} />
        <NutritionBar label="지방" percentage={75} />
      </div>
      <div className="advice-section">
        <button onClick={() => handleGenerateAdvice('today')}>오늘</button>
        <button onClick={() => handleGenerateAdvice('week')}>일주일</button>
        <div className="advice-text">{advice}</div>
      </div>
      <div className="recommendations-section">
        <button onClick={handleGenerateRecommendations}>추천 식단</button>
        <div className="recommendation-list">
          {/* 사진 출력 방식: 서버한테 요청 후 없으면 육류/생선류 등 대분류 사진 출력 */}
        {recommendations.map((item, index) => (
            <div key={index} className="recommendation-item">
              <img src={`${process.env.PUBLIC_URL}/img/${item.image}`} alt={item.name} />
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogPage;