import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {

    return (
      <BrowserRouter>
        <div className="app-wrapper">
            < Header />
            <Navbar />
          <div className="app-wrapper-content">

            <Route path='/dialogs'
              render={ () => <Dialogs
              state ={props.state.dialogsPage} />}
            />
 
            <Route path='/Profile'
              render={ () => <Profile
              profilePage ={props.state.profilePage}
              dispatch = {props.dispatch} />}
            />
          </div>
        </div>
      </BrowserRouter>
  );
}
export default App;