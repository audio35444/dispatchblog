import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';



class PostsNew extends Component{
  constructor(props){
    super(props);
  }
  renderField(field){
    //es como hacer const {touched,error}=meta;
    const {meta:{touched,error}}=field;
    const classNameLabel = `form-group ${touched && error ? 'has-danger':'' }`
    return (
      <div className={classNameLabel}>
        <label htmlFor="">{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />

          {error && touched ? (
            <div className="alert alert-danger margin-top" role="alert">
              {error}
            </div>) :''
          }

      </div>
    );
  }
  onSubmit(values){
    this.props.createPost(values,()=>{
      this.props.history.push('/');
    });
  }
  render(){
    const {handleSubmit}=this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>New Post</h3>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary margin-right">Submit</button>
        <Link to="/" className="btn btn-danger margin-left">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};
  if(!values.title){
    errors.title="Enter a title!";
  }
  else if(values.title.length < 3){
    errors.title="Title must be at least 3 characters!";
  }
  if(!values.categories){
    errors.categories = "Enter some categories please";
  }
  if(!values.content){
    errors.content="Enter some content please";
  }
  return errors;
}
const form='PostsNewForm';
export default reduxForm({
  validate,
  form
})(
  connect(null,{createPost})(PostsNew)
);
