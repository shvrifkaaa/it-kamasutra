import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/dialogItem'
import Message from './Message/messageItem';

const Dialogs = (props) =>{

let dialogs = [    
    {id : 1, name: 'Sharif'},
    {id : 2, name: 'Erna'},
    {id : 3, name: 'Emir'},
    {id : 4, name: 'Filipp'},
    {id : 5, name: 'Adela'},
]
let messages = [    
    {id : 1, message: 'HAHA'},
    {id : 2, message: 'AHAHHA'},
    {id : 3, message: 'ajgkadfgkm'},
    {id : 4, message: 'ksmdkfj'},
]
let dialogElement = dialogs.map( (d) => <DialogItem name ={d.name} id={d.id} /> );

let messageElement = messages.map( (m) => <Message message ={m.message} />);

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
