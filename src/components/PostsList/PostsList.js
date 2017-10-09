import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import PostItem from '../PostItem/PostItem';

class PostsList extends Component {
    constructor (props) {
        super (props);
        this.state = {posts: [{title: 'Näringslivskontakt', utskott: 'Näringsliv', link: 'https://www.google.com'}, {title: 'Arbetare', utskott: 'Sexet', link: 'https://www.facebook.com'}]}
    }

    renderList () {
        return this.state.posts.map(item => {
            console.log(item)
            return (
                <div>
                <PostItem title={item.title} utskott={item.utskott} link={item.link} /> 
                <Divider />
                </div>
            )
        })
    }
    render () {
        return (
            <div>
            <Paper zDepth={2}>
                    {this.renderList()} 
            </Paper>
            </div>
        )
    } 
}

export default PostsList;