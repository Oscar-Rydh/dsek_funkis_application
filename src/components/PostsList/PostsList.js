import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import PostItem from '../PostItem/PostItem';
import Posts from '../../state.js';

class PostsList extends Component {
    constructor (props) {
        super (props);
        let posts = new Posts();
        this.state = posts.getPosts();
    }

    renderList () {
        return this.state.posts.map(item => {
            return (
                <div>
                <PostItem 
                    title={item.title} 
                    utskott={item.utskott} 
                    link={item.link} 
                    responsabillities={item.responsabillities} 
                    description={item.description}
                    salesPitch={item.salesPitch}
                /> 
                <Divider />
                </div>
            )
        })
    }
    render () {
        return (
            <div>
            <Paper className="PostList" zDepth={2}>
                    {this.renderList()} 
            </Paper>
            </div>
        )
    } 
}

export default PostsList;