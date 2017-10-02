import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './PostForm.css';



class PostForm extends Component {
    constructor(props) {
        super (props);
    }

    handleClick () {
        alert("Post announced")
    }

    render () {
        return (
            <div className="PostForm">
                <h1> Announce a new post </h1>
                <h3> Post name </h3>
                <TextField
                    hintText="What is the post called"
                /><br />
                <br />
                <h3> Sellingpoint </h3>
                <TextField
                    hintText="A sentence describing why someone should apply for this post"
                /><br />
                <br />
                <h3> Description </h3>
                <TextField
                    hintText="A longer more detailed description about the post"
                /><br />
                <br />
                <h3> Responsabilities  </h3>
                <TextField
                    hintText="What are the posts main responsabilities"
                /><br />
                <br />
                <RaisedButton primary={true} label="Create Post" onClick={() => this.handleClick()}/>
            </div>
        )
    }
};

export default PostForm;