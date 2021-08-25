import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props)=> {
    let path ="/Dialogs/" + props.name;
    return(
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={path}> {props.name} </NavLink>
                </div>
    )
}
const Message = (props)=>{
    return(
        <div className={s.message}> {props.message}</div>
    )
}
const Dialogs = (props) =>{

let dialogsData = [    
    {id : 1, name: 'Sharif'},
    {id : 2, name: 'Erna'},
    {id : 3, name: 'Emir'},
    {id : 4, name: 'Filipp'},
    {id : 5, name: 'Adela'},
]
let messagesData = [    
    {id : 1, message: 'HAHA'},
    {id : 2, message: 'AHAHHA'},
    {id : 3, message: 'ajgkadfgkm'},
    {id : 4, message: 'ksmdkfj'},
]
let dialogElement = dialogsData.map( (d) => <DialogItem name ={d.name} id={d.id} /> );

let messageElement = messagesData.map( (m) => <Message message ={m.message} />);

return (
        <div className={s.Dialogs}>
            <div className={s.dialogItems}>
                {dialogElement}
            </div>

            <div className={s.messages}>
                {messageElement}
            </div>
        </div>

        )
}
export default Dialogs
