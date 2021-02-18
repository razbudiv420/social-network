import React from 'react';
import ms from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form'
import CustomField from '../Commons/CustomField';
import { maxLength200 } from '../../helpers/validators';

const MyPosts = (props) => {
  let post = props.postPage.postArr.map(postElement => <Post  key={postElement.id} message={postElement.message}  count={postElement.count}/>);

  const addPost = (value) => {
    props.addPost(value.newPost);
  } 
  
    return (
        <div className = {ms.space}>
        My posts
        <div>
          New post
          <div>
          <NewPostForm onSubmit={addPost}/>
          </div>
        </div>
        {post}
      </div>
    );
}

const NewPost = props => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name="newPost" component={CustomField} fieldType="textarea" label="Расскажите о своих мыслях" validate = {[maxLength200]}></Field>
        </div>
       <div>
         <button type="submit">Отправить</button>
       </div>
      </form>
  )
}

const NewPostForm = reduxForm({
  form: 'NewPostForm'
})(NewPost)

export default MyPosts;

