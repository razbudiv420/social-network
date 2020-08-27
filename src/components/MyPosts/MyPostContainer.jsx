import React from 'react';
import { updatePostTextActionCreator, addPostActionCreator } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostContainer = (props) => {
  let state = props.store.getState();
  debugger;
  let addText = () => {
    props.store.dispatch(addPostActionCreator());
  } 
  const update = (newText) => {
    props.store.dispatch(updatePostTextActionCreator(newText))
  } 
    return (<MyPosts addText = {addText} update={update} post={state.postPage.postArr} value={state.postPage.updatedText}/>)
}

export default MyPostContainer