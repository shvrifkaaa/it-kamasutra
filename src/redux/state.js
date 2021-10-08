import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import dialogsReducer from "./dialogs-reducer"

 
let store ={ 
        _state :{
        profilePage:{
            posts : [    
                {id : 1, message: 'Hi, how are u ?', likescount: 12},
                {id : 2, message: 'It`s my first post', likescount: 5},
        ],
        newPostText:'it-kamasutra.com'
        },
        dialogsPage:{
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
        },
        sidebar:{},



        _callSubscriber () { 
            console.log('state was changed')
        },
        getState() {
            return this._state;
        },
        subscribe (observer){
            this._callSubscriber = observer;          // observer //
        },
        dispatch(action){
            this._state.profilePage= profileReducer(this._state.profilePage, action);
            this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action);
            this._state.sidebar=     sidebarReducer(this._state.sidebar, action);
            this._callSubscriber(this._state);
            }
        }
    }


export default store
