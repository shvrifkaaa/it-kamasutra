import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let post = [    
        {id : 1, message: 'Hi, how are u ?', likescount: 12},
        {id : 2, message: 'It`s my first post', likescount: 5},
    ]
    
    let postElement = post.map (p =><Post message={p.message} likescount={p.likescount} /> )
    return (
        <div className={s.postsBlock}>
            <h3>My posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button> Add post </button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}
export default MyPosts