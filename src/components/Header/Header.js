import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import networkLogo from '../../assets/images/logo.png';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

function Header(props) {
    return (
        <header className={classes.header}>
            <NavLink to={'/profile'}><img src={networkLogo} /></NavLink>
            <div className={classes.loginBlock}>
                {props.isAuth ? 
                <div className={classes.accountBlock}>
                <span>{props.login}</span>
                <Button variant='outlined' onClick={props.logoutUser}><LogoutIcon /></Button>
                </div>
                : <NavLink to={'/login'}><LoginIcon /></NavLink>}
            </div>
        </header>
    );
}
export default Header;