import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-qGqAcyvbYa_wDNekjmrfHIO7Lpp7rstIA&usqp=CAU'/>
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post