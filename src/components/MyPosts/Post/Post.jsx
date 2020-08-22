import React from 'react'
import p from './Post.module.css'

const Post = (props) => {
    return (
        <div className={p.item}>
        <div>
        <img alt="post image" src="https://static.boredpanda.com/blog/wp-content/uploads/2017/11/My-most-popular-pic-since-I-started-dog-photography-5a0b38cbd5e1e__880.jpg"></img>
        </div>
        {props.message}
        <div>
            <span>{props.count}</span>
        </div>
        </div>
    );
}


export default Post;