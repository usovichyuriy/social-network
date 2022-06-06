import React from "react";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuth } from '../redux/auth-selectors';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: getIsAuth(state)
})
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to='/login' />
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}