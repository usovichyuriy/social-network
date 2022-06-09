import React, { Suspense } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import { useEffect } from 'react';
import { getAuthUserData } from './redux/auth-reducer';
import { connect } from "react-redux";
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


const App = (props) => {

  useEffect(() => {
    props.getAuthUserData();
  }, []);

  return (
    <HashRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/"
                   element={<Navigate to="/profile" />} />
            <Route path="/dialogs"
                   element={
                <Suspense fallback={<Preloader />}>
                  <DialogsContainer />
                </Suspense>} />
            <Route path="/profile/:userId"
                   element={<ProfileContainer />} />
            <Route path="/profile"
                   element={<ProfileContainer />} />
            <Route path="/users"
                   element={<UsersContainer />} />
            <Route path="/login"
                   element={<Login />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}
export default connect(null, { getAuthUserData })(App);