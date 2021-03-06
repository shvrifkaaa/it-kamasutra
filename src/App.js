import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
            < Header />
            <Navbar />
          <div className="app-wrapper-content">

            <Route path='/dialogs'
              render={ () => <DialogsContainer />} />
 
            <Route path='/Profile'
              render={ () => <Profile />}
            />
          </div>
        </div>
      </BrowserRouter>
  );
}
export default App;