import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import OCR from './OCR'; // OCR 컴포넌트 임포트
import Search from './Search'; // Search 컴포넌트 임포트
import InBody from './InBody';
import Calender from './Calender';
import Log from './Log';
import Setting from './Setting';
import AuthButtons from './AuthButtons'; // AuthButtons 컴포넌트를 임포트합니다.
import NavigationButtons from './NavigationButtons';
import ChangePw from './ChangePw';
import DeleteAccount from './DeleteAccount';
import './App.css';

function App() {

  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="navigation">
            <div className="logo">F-log</div>
            <NavigationButtons />
          </nav>
          <AuthButtons /> {/* AuthButtons 컴포넌트를 사용합니다. */}
        </header>
        <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ocr" element={<OCR />} />
          <Route path="/search" element={<Search />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/inbody" element={<InBody />} />
          <Route path="/log" element={<Log />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/changepw" element={<ChangePw />} />
          <Route path="/deleteaccount" element={<DeleteAccount />} />
        </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;