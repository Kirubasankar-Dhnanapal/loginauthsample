import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    logout = () => {
        localStorage.setItem("isLoggedin",false)
        this.props.history.push('/searchblooddetail')
    }

    componentDidMount(){
        document.title = 'Dashboard'
    }


    render() {
       
        return (
            <div className='dashboard'>
                <h1>You are Logged now</h1>
            </div>
        )
    }
}

export default withRouter(Dashboard);