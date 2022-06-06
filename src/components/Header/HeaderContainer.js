import React, { useEffect } from 'react';
import Header from './Header';
import { setAuthUserData, getAuthUserData, logoutUser } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { getIsAuth, getLogin } from '../../redux/auth-selectors';

const HeaderContainer = (props) => {

    useEffect(() => {
        props.getAuthUserData();
    }, []);

    return <Header {...props} />
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
})
export default connect(mapStateToProps, { setAuthUserData, getAuthUserData, logoutUser })(HeaderContainer);