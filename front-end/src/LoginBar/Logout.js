import React from "react";
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import axios from 'axios';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin : false
        };
    }


    render() {
        return (
            <div>Logout</div>
        )
    }

}

    export default Logout;