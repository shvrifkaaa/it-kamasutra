import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator,updateNewPostTextActionCreator } from '../../../redux/state'


const MyPosts = (props) => { 
    let postElement = 
    props.posts.map (p =><Post message={p.message} likescount={p.likescount} /> )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator() )
    }
    
    let onPostChange =() => { 
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator (text);
        props.dispatch(action)  
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts </h3>
            <div>
                <div>
                    <textarea onChange ={onPostChange} ref={newPostElement} value={props.NewPostText} /> 
                </div>
                <div>
                    <button onClick ={addPost} type='button' > Add post </button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}
export default MyPosts