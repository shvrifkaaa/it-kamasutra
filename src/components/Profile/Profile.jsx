import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
         
    )
}
export default Profile