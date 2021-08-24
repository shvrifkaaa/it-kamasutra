import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = (props) => {
    let postData = [    
        {id : 1, message: 'Hi, how are u ?'},
        {id : 2, message: 'It`s my first post'},
    ]

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
                <Post message={postData[0].message} likescount='0' />
                <Post message={postData[1].message} likescount='23' />

            </div>
        </div>
    )
}
export default MyPosts