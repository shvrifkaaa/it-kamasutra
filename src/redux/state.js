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
        ]},
        },
        _callSubscriber () { 
            console.log('state was changed')
        },

        getState() {
            return this._state
        },
        subscribe (observer){
            this._callSubscriber = observer;          // observer //
        },

        dispatch(action){
            if (action.type ==='ADD-POST') { 
                let newPost = {
                    id : 5,
                    message : this._state.profilePage.newPostText,
                    likescount : 0 
                };
                    this._state.profilePage.posts.push(newPost);
                    this._state.profilePage.newPostText = '';
                    this._callSubscriber(this._state);                
            } else if (action.type === "UPDATE-NEW-POST-TEXT") { 
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);                
            }
        }
}
export default store
window.state = store 
