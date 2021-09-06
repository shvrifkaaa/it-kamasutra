import { rerenderEntireTree } from "../render";

let state ={
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
        dialogs: [    
        {id : 1, name: 'Sharif'},
        {id : 2, name: 'Erna'},
        {id : 3, name: 'Emir'},
        {id : 4, name: 'Filipp'},
        {id : 5, name: 'Adela'},
    ]
},}

export let addPost = () => {
    let newPost = {
        id : 5,
        message : state.profilePage.newPostText,
        likescount : 0 
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state