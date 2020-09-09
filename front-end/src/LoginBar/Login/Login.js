import React from "react";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin : false
        };
    }

    componentDidMount(){
        document.title='Login'
    }

    signup = () => {
        if(this.state.username && this.state.password){
            fetch(`http://localhost:3002/login?name=${this.state.username}&password=${this.state.password}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
            ).then((res)=>res.json()).then((result)=> {
             if(result.success === true){
                this.props.history.push('/dashboard')
             }else{
                 alert('Username or Password is Incorrect')
             }
            })
        }else{
            alert('Please Fill All Input Fields')
        }
        
    }


    setusername = (e) => {
        this.setState({
            username: e.target.value,
        })
    }

    setpassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    loadRegister = () => {
        this.props.history.push('/register')
    }

    loadPassword = () => {
        this.props.history.push('/forgotpassword')
    }

    render() {
        
        return (
            <div className='RegisterDiv'>
             <div className='loginbox'>
                          
                        <div  className='loginlabel'><label>Login here</label></div>
                        <input className='usediv' type='text' placeholder='Username' value={this.state.username} onChange={this.setusername} />
                        <br />
                        <input className='loginpwd' type='password' placeholder='Password' value={this.state.password} onChange={this.setpassword} />
                        <br />
                        <div className='loginbtn'>
                            <Button style={{ letterSpacing: 5,background: 'white' }} onClick={this.signup}>Login</Button>
                        </div>
                        <div className='regisbtn'><Button className='registerbutton' style={{
                            letterSpacing: 3,background: 'white',
                            borderRadius: 0
                        }} onClick={this.loadRegister}>Register</Button></div>
                    </div> 
                    </div>
        )
    }

}

// const mapStateToProps = (state) => {
//     return {
//         name : state.name
//     }

// }

// const mapDispathToProps = (dispatch) => { 
//     return {
//     LogIn : (name,password)=>{
//         dispatch ({
//             type : 'Login',
//             name : name,
//             password : password
//         })
//     }
// }
// }



export default withRouter(Login);