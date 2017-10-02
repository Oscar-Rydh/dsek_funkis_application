import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';


class Navbar extends Component {
    constructor(props) {
        super (props);
        this.handleLeftIconButtonTouchTap = this.handleLeftIconButtonTouchTap.bind(this);
        console.log(this.state)
    }

    handleLeftIconButtonTouchTap (event) {
    }

    render () {
        return (
            <div>
            <AppBar
                title="D-sek ansök till funktionärsposter"
                onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap}
            />
            </div>
        )
    }
}

export default Navbar;