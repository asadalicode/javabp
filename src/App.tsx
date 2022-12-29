import React from 'react';
import logo from './logo.svg';
import './App.scss';
import AppRouting from './navigation/appRouting';
import Header from './pages/navbar';

function App() {
  return (
    <>
      <Header />
      <div className="page-layout">
        <AppRouting />
      </div>
    </>
  );
}

export default App;
