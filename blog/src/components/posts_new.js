import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
class PostsNew extends Component{
	render(){
		//ES6 version of 
		//const handleSubmit = this.props.handleSubmit;
		//const title = this.props.fields.title;
		const {fields:{title,categories,content},handleSubmit} = this.props; //configuration object. handleSubmit is a helper from redux-form
		//{...title} syntax
		//everyone of the properties on the title object shows up inside the input
		//destructure the object into separate keys and values and pass it into the input
		return (
		<form onSubmit={handleSubmit}>
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

export default reduxForm({
	form:'PostsNewForm',
	fields:['title','categories','content']
})(PostsNew);