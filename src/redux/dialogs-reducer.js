const UPDATE_NEW_MESSAGE_BODY ='UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE ='SEND_MESSAGE';


let initialState = {
    messages: [    
    {id : 1, message: 'HAHA'},
    {id : 2, message: 'AHAHHA'},
    {id : 3, message: 'ajgkadfgkm'},
    {id : 4, message: 'ksmdkfj'},
],
    dialogs:[    
    {id : 1, name: 'Sharif'},
    {id : 2, name: 'Erna'},
    {id : 3, name: 'Emir'},
    {id : 4, name: 'Filipp'},
    {id : 5, name: 'Adela'},
],
    newMessageBody: " "
}

const dialogsReducer = (state = initialState, action) => {

        switch (action.type) {

            case UPDATE_NEW_MESSAGE_BODY:
                state.newMessageBody = action.body;
                return state;

            case SEND_MESSAGE:
                let body = state.newMessageBody;
                state.newMessageBody = '';
                state.messages.push({ id: 6, message: body });
                return state;
            default:
                return state;
        }
}    

export const sendMessageCreator = () => ({type : 'SEND_MESSAGE'})
export const updateNewMessageBodyCreator = (body) => ({
    type: 'UPDATE_NEW_MESSAGE_BODY', body: body })

export default dialogsReducer
