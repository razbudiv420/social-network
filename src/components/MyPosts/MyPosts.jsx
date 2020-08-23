import React from 'react';
import ms from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  debugger;
  let post = props.state.postPage.postArr.map(postElement => <Post  key={postElement.id} message={postElement.message}  count={postElement.count}/>);
  let currText = React.createRef();
  
  let addText = () => {
    let newText = currText.current.value;
    props.dispatch({type: 'ADD-NEW-POST', newText: newText});
  } 
  const update = () => {
    let newText = currText.current.value;
    props.dispatch({type:'UPDATE-POST-TEXT', newText: newText })
    console.log(props.state.postPage.updatedText)
  } 
    return (
        <div className = {ms.space}>
        My posts
        <div>
          New post
          <div>
          <div>
          <textarea ref={currText} onChange={update} value={props.state.postPage.updatedText}></textarea>
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