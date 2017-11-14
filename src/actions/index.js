import axios from 'axios';
import Firebase from '../lib/firebase';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=audio354441234';

const itemsRef = Firebase.database().ref();

export function fetchPosts(){
  // return dispatch =>{
  //   itemsRef.on('value',(elements)=>{
  //     console.log(elements.val());
  //     if(elements.val()){
  //       console.log(elements.val()['posts']);
  //       dispatch({
  //         type:FETCH_POSTS,
  //         payload:elements.val()['posts']
  //       });
  //     }
  //   });
  // }
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return (dispatch)=>{
    request.then((result)=>{
      dispatch({type:FETCH_POSTS,payload:result})
    });
  };
  // return {
  //   type:FETCH_POSTS,
  //   payload:request
  // };

}

export function createPost(values,callback){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
  .then(()=> callback());

  return {
    type:CREATE_POST,
    payload:request
  };
}

export function fetchPost(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type:FETCH_POST,
    payload:request
  }
}
export function deletePost(id,callback){
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(()=>callback());
  return {
    type:DELETE_POST,
    payload:id
  }
}
