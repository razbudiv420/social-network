import React from 'react';
import { updatePostTextActionCreator, addPostActionCreator } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

  const mapStateToProps = state => {
  return {
    postPage: state.postPage
  }
  }

const mapDispatchToProps = dispatch => {
  return {
    addText: () => {dispatch(addPostActionCreator())},
    update: (newText) => {dispatch(updatePostTextActionCreator(newText))}
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostContainer