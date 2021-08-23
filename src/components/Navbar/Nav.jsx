import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'


// let c1 = "item";
// let c2 = "active"
//  "item active"
// let classes =c1 + " " + c2 ;
// let classesNew = `${s.item} ${s.active}`;

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
        </nav>
    )
}
export default Navbar