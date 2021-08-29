import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/Profile' activeClassName={s.active}> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs'> Messages </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='/News'> News </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Settings'> Settings </NavLink>
            </div>
                <h1> Friends </h1>
            <Friends /> 
        </nav>
    )
}
export default Navbar