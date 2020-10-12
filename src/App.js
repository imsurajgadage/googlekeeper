import React from 'react';
import logo from './logo.svg';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
function App() {
  return (
    <div className="App">
        <Header/>
        <Note />
        <Footer/>
    </div>
  );
}

export default App;
