import React, {Component,PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import { Link } from 'react-router';
class PostsNew extends Component{
	static contextTypes = {
    router: PropTypes.object
  };
	/*onSubmit(props) {
    	console.log('inside onsubmit');
		this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate the user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  	}*/
	render(){
		//ES6 version of 
		//const handleSubmit = this.props.handleSubmit;
		//const title = this.props.fields.title;
		const {fields:{title,categories,content},handleSubmit} = this.props; //configuration object. handleSubmit is a helper from redux-form
		

		//{...title} syntax
		//everyone of the properties on the title object shows up inside the input
		//destructure the object into separate keys and values and pass it into the input
		return (
		<form onSubmit={handleSubmit(this.props.createPost)}>
			<h3>Create A New Post</h3>
			<div className="form-group">
				<label>Title</label>
				<input type="text" className="form-control" {...title}/> 
			</div>
			<div className="form-group">
				<label>Categories</label>
				<input type="text" className="form-control" {...categories} />
			</div>
			<div className="form-group">
				<label>Content</label>
				<textarea className="form-control" {...content}/>
			</div>
			
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
		);
	}
}
//connect:first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
	form:'PostsNewForm',
	fields:['title','categories','content']
},null,{createPost})(PostsNew);