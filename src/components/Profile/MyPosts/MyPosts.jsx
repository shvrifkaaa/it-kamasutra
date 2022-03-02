import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => { 
    let postElement = 
    props.posts.map (p =><Post message={p.message} likescount={p.likescount} /> )

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()

    }
    let onPostChange =() => { 
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

        // let action = {type:'UPDATE-NEW-POST-TEXT', newText:text}
        // let action = updateNewPostTextActionCreator (text);
        // props.dispatch(action)  
    }
    return (

        <div className={s.postsBlock}>
            <h3>My posts </h3>
            <div>
                <div>
                    <textarea onChange ={onPostChange} ref={newPostElement} value={props.NewPostText} /> 
                </div>
                <div>
                    <button onClick ={onAddPost} type='button' > Add post </button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    )
}
export default MyPosts