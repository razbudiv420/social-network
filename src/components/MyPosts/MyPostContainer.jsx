import React from 'react';
import { addPostActionCreator } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

  const mapStateToProps = state => {
  return {
    postPage: state.postPage
  }
  }

const mapDispatchToProps = dispatch => ({
    addPost: (newPostText) => {dispatch(addPostActionCreator(newPostText))},
})
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostContainer