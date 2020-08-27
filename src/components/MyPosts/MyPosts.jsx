import React from 'react';
import ms from './MyPosts.module.css';
import Post from './Post/Post';
import { updatePostTextActionCreator, addPostActionCreator } from '../../redux/profile-reducer';
const MyPosts = (props) => {
  debugger;
  let post = props.state.postPage.postArr.map(postElement => <Post  key={postElement.id} message={postElement.message}  count={postElement.count}/>);
  
  let addText = () => {
    props.dispatch(addPostActionCreator());
  } 
  const update = (e) => {
    props.dispatch(updatePostTextActionCreator(e.target.value))
  } 
    return (
        <div className = {ms.space}>
        My posts
        <div>
          New post
          <div>
          <div>
          <textarea onChange={update} value={props.state.postPage.updatedText}></textarea>
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