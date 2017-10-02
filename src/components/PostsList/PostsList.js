import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import PostItem from '../PostItem/PostItem';

class PostsList extends Component {
    constructor (props) {
        super (props);
        this.state = {posts: [{title: 'Näringslivskontakt', utskott: 'Näringsliv'}, {title: 'Arbetare', utskott: 'Sexet'}]}
    }

    renderList () {
        return this.state.posts.map(item => {
            return (
                <div>
                <PostItem title={item.title} utskott={item.utskott} /> 
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