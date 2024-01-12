import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Setting() {
  const navigate = useNavigate();
  const [exerciseGoal, setExerciseGoal] = useState('근육증가');
  const [inbodyAlert, setInbodyAlert] = useState('활성화');
  const [inbodyAlertPeriod, setInbodyAlertPeriod] = useState('1달');
  const [customPeriod, setCustomPeriod] = useState('');

  const isSelected = (buttonName, state) => state === buttonName;

  const handleInbodyAlertPeriodChange = (period) => {
    setInbodyAlertPeriod(period);
    if (period !== '사용자 지정') {
      setCustomPeriod(''); // 사용자 정의 주기가 아니면, customPeriod를 비웁니다.
    }
  };

  const saveSettings = () => {
    // 여기서 설정을 저장하는 로직을 구현하세요.
    // 예: localStorage에 저장, API를 호출하여 서버에 저장 등
    navigate('/');
  };

  return (
    <div className="settings">
      {/* 운동 목표 섹션 */}
      <div className="exercise-goal">
        {['체중감량', '근육증가', '체력향상', '유연성 향상'].map((goal) => (
          <button
            key={goal}
            onClick={() => setExerciseGoal(goal)}
            className={isSelected(goal, exerciseGoal) ? 'selected' : ''}
          >
            {goal}
          </button>
        ))}
      </div>

      {/* 인바디 알림 섹션 */}
      <div className="inbody-alert">
        {['활성화', '비활성화'].map((status) => (
          <button
            key={status}
            onClick={() => setInbodyAlert(status)}
            className={isSelected(status, inbodyAlert) ? 'selected' : ''}
          >
            {status}
          </button>
        ))}
      </div>

      {/* 인바디 알림 주기 섹션 */}
      <div className="inbody-alert-period">
        {['2주', '1달', '2달', '사용자 지정'].map((period) => (
          <button
            key={period}
            onClick={() => handleInbodyAlertPeriodChange(period)}
            className={isSelected(period, inbodyAlertPeriod) ? 'selected' : ''}
          >
            {period}
          </button>
        ))}
        {inbodyAlertPeriod === '사용자 지정' && (
          <input
            type="text"
            value={customPeriod}
            onChange={(e) => setCustomPeriod(e.target.value)}
          />
        )}
      </div>

      {/* 저장 및 취소 버튼 */}
      <button onClick={saveSettings}>저장</button>
      <button onClick={() => navigate('/')}>취소</button>

      {/* 비밀번호 변경 링크 */}
      <div onClick={() => navigate('/changepw')}>비밀번호를 변경하시겠습니까?</div>

      {/* 회원탈퇴 버튼 */}
      <button onClick={() => navigate('/deleteaccount')}>회원탈퇴</button>
    </div>
  );
}

export default Setting;