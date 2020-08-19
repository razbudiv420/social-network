import React from 'react';
import ms from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  let post = props.state.postPage.postArr.map((postElement) => <Post message={postElement.message}  count={postElement.count}/>);
  let currText = React.createRef();
  let addText = () => {
  let newText = currText.current.value;
    props.addPost(newText);
  } 
    return (
        <div className = {ms.space}>
        My posts
        <div>
          New post
          <div>
          <div>
          <textarea ref={currText}></textarea>
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