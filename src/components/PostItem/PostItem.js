import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import logo from '../../D-symbol.svg'

class PostItem extends Component  {
    constructor(props) {
        super(props);
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
                {this.props.salesPitch}
            </CardText>
            <CardHeader                 
                title="Description"
                expandable={true}
            />
            <CardText expandable={true}>
                {this.props.description}
            </CardText>
             <CardHeader                 
                title="Responsabilities"
                expandable={true}
            />
            <CardText expandable={true}>
                {
                    this.props.responsabillities.map(entry => {
                        return <li> {entry} </li> 
                    })
                }
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