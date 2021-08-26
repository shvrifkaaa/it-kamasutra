import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

const DialogItem = (props)=> {
    let path ="/Dialogs/" + props.name;
    return(
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={path}> {props.name} </NavLink>
                </div>
    )
}
export default DialogItem
