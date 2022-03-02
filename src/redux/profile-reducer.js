const ADD_POST ='ADD-POST'
const UPDATE_NEW_POST_TEXT ='UPDATE_NEW_POST_TEXT';

let initialState = {
    posts : [    
        {id : 1, message: 'Hi, how are u ?', likescount: 12},
        {id : 2, message: 'It`s my first post', likescount: 5},
],
newPostText:'it-kamasutra.com'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likescount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;

            return state;
        default :
            return state
        }
    }
    
export const addPostActionCreator = () => ({type : 'ADD-POST'  })
export const updateNewPostTextActionCreator = (text) => ({
    type: 'UPDATE_NEW_POST_TEXT', newText:text })         

export default profileReducer