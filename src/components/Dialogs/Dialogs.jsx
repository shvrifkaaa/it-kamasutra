import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/dialogItem'
import Message from './Message/messageItem';

const Dialogs = (props) =>{

let dialogElement = props.state.dialogs.map( (d) => <DialogItem name ={d.name} id={d.id} /> );

let messageElement = props.state.messages.map( (m) => <Message message ={m.message} />);

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
