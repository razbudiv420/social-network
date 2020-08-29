import React from 'react';
import ms from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let post = props.postPage.postArr.map(postElement => <Post  key={postElement.id} message={postElement.message}  count={postElement.count}/>);
  const addText = () => {
    props.addText();
  } 
  const update = (e) => {
    props.update(e.target.value);
  } 
    return (
        <div className = {ms.space}>
        My posts
        <div>
          New post
          <div>
          <div>
          <textarea onChange={update} value={props.postPage.updatedText}></textarea>
          </div>
          <div>
          <button onClick = {addText}>Add post</button>
          <button>Remove</button>
          </div>
          </div>
        </div>
        {post}
      </div>
    );
}

export default MyPosts;

