import react from 'react'
import s from './Friends.module.css'
const Friends =(props) => {
    return (
        <div className={s.cont}>
        <div>
            <img src='https://i.pinimg.com/564x/db/34/9a/db349aa2150837dd90868185a20862b0.jpg'></img>
        <h1>Erna</h1>
        </div>
        <div>
            <img src = 'https://i.pinimg.com/564x/a2/f6/8f/a2f68fd65b8062ee9f7d09b81849238b.jpg'></img>
        <h1>Filipp</h1>
        </div>
        <div>
            <img src='https://i.pinimg.com/564x/5a/78/98/5a7898e3b66083a57238860438744788.jpg'></img>
        <h1> Adela </h1>
        </div>
    </div>
    )
}
export default Friends