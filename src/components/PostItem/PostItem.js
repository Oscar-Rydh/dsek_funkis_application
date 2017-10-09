import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle'
import logo from '../../D-symbol.svg'

class PostItem extends Component  {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
    };

    handleExpand = () => {
        this.setState({expanded: !this.state.expanded});
    };

    handleReduce = () => {
        this.setState({expanded: false});
    };

    render() {
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
            <CardHeader
                avatar={logo}
                title={this.props.title}
                subtitle={this.props.utskott}
                actAsExpander={true}
                showExpandableButton={true}
            />
            <CardText expandable={false} >
                A Brief textfield for the post 
            </CardText>
            <CardHeader                 
                title="Description"
                expandable={true}
            />
            <CardText expandable={true}>
                This is some description about the post 
            </CardText>
             <CardHeader                 
                title="Responsabilities"
                expandable={true}
            />
            <CardText expandable={true}>
                <li> Be great </li>
                <li> Be awesome </li>
            </CardText>
            <CardActions expandable={true}>
            <RaisedButton primary={true} label="Ansök" href={this.props.link}/>
            </CardActions>
            <CardActions>
                <FlatButton label="Mer info" onClick={this.handleExpand} />
            </CardActions>
            </Card>
        );
    }
}
export default PostItem;