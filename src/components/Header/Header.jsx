import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://1000logos.net/wp-content/uploads/2018/01/pinterest-logo.png'/>
        <div className={s.loginBlock}>
            { props.isAuth ? props.login :
            <NavLink to={'login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header
