import React, { useState } from 'react';

function InBody() {
  const [weight, setWeight] = useState('');
  const [muscleMass, setMuscleMass] = useState('');
  const [fatPercentage, setFatPercentage] = useState('');
  const [fatMass, setFatMass] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleConfirm = () => {
    // 여기서 입력값 검증 로직을 추가할 수 있습니다.
    // 예를 들어, 모든 필드가 숫자로 채워져 있는지 확인하는 등
    if (weight && muscleMass && fatPercentage && fatMass) {
      setIsSaved(true);
      alert('입력된 정보가 저장되었습니다. OK!');
    } else {
      alert('모든 필드를 채워주세요.');
    }
  };

  return (
    <div className="inbody-input-container">
      <h2>인바디 정보를 입력해주세요!</h2>
      <div className="input-group">
        <label>체중</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label>골격근량</label>
        <input
          type="number"
          value={muscleMass}
          onChange={(e) => setMuscleMass(e.target.value)}
        />
        <label>체지방률</label>
        <input
          type="number"
          value={fatPercentage}
          onChange={(e) => setFatPercentage(e.target.value)}
        />
        <label>체지방량</label>
        <input
          type="number"
          value={fatMass}
          onChange={(e) => setFatMass(e.target.value)}
        />
      </div>
      <button onClick={handleConfirm}>{isSaved ? 'OK' : '확인'}</button>
    </div>
  );
}

export default InBody;