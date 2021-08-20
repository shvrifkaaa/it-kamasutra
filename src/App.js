import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';

const App = () => {
    return (
    <div className="App-wrapper">
          < Header />
          <Navbar />
          <Profile />
     </div>
  );
}
export default App;