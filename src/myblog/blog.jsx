import React, { useState, useRef } from 'react';
import './App.css';
//내용 미구현
function MyApp() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showSubNav, setShowSubNav] = useState(true);

  const navRef = useRef(null);

  const changeSection = (section) => {
    setCurrentSection(section);
    if (section === 'food') {
        setShowSubNav(true);
      } else {
        setShowSubNav(false);
      }
  };

  const getSubNavHeight = () => {
    return showSubNav && currentSection === 'food' && navRef.current
      ? navRef.current.getBoundingClientRect().height
      : 0;
  };

  return (
    <div className="MyApp">
      <header>
        <h1>F-log</h1>
      </header>

      <nav ref={navRef}>
        <button onClick={() => changeSection('home')}>홈</button>
        <button onClick={() => changeSection('food')}>음식</button>
        <button onClick={() => changeSection('log')}>로그</button>
        <button onClick={() => changeSection('inbody')}>인바디</button>
        <button onClick={() => changeSection('calendar')}>캘린더</button>
      </nav>

      {showSubNav && currentSection === 'food' && (
        <div className="subNav" style={{ top: navRef.current ? navRef.current.getBoundingClientRect().bottom : 0 }}>
          <button onClick={() => setCurrentSection('ocr')}>OCR</button>
          <button onClick={() => setCurrentSection('search')}>Search</button>
        </div>
      )}

      <section style={{ marginTop: getSubNavHeight() }}>
        <h2>
          {currentSection === 'home'
            ? '홈'
            : currentSection === 'calendar'
            ? '캘린더'
            : currentSection === 'log'
            ? '로그'
            : currentSection === 'inbody'
            ? '인바디'
            : '음식'}
        </h2>
        <p>
          {currentSection === 'home'
            ? '홈에 관한 내용...'
            : currentSection === 'food'
            ? '어떻게 입력하시겠어요?'
            : currentSection === 'log'
            ? '로그에 관한 내용...'
            : currentSection === 'inbody'
            ? '인바디에 관한 내용...'
            : currentSection === 'ocr'
            ? 'OCR에 관한 내용...'
            : currentSection === 'search'
            ? 'Search에 관한 내용...'
            : '캘린더에 관한 내용...'}
        </p>
      </section>
    </div>
  );
}

export default MyApp;
