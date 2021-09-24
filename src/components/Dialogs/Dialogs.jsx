import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/dialogItem'
import Message from './Message/messageItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from './../../redux/dialogs-reducer'


const Dialogs = (props) =>{

    let state = props.store.getState().dialogsPage;
    let dialogElement = state.dialogs.map( (d) => <DialogItem name ={d.name} id={d.id} /> );
    let messageElement = state.messages.map( (m) => <Message message ={m.message} />);
    let newMessageBody = state.newMessageBody;
        
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };


return (
        <div className={s.Dialogs}>
            <div className={s.dialogItems}>
                {dialogElement}
            </div>

            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message'
                                  value={newMessageBody}
                                  onChange={onNewMessageChange}></textarea>
                     </div>
                    <div>
                        <button onClick ={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>

        )
}
export default Dialogs
