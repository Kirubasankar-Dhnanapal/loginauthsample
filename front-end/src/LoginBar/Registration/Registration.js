import React from "react";
import "../../App.css";
import "../../Styles/Registrationstyles.css";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            username: '',
            password: '',
            emailId: '',
            firstname: '',
            lastname: '',
            gender: '',
            country: ''
        };
    }

    setName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    setPassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }

    setEmail = (e) => {
        this.setState({
            emailId: e.target.value
        })
    }

    firstname = (e) => {
        this.setState({
            firstname: e.target.value
        })
    }

    lastname = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }

    getGender = () => {
        var genderId = document.getElementById('gender');
        this.setState({
            gender: genderId[genderId.selectedIndex].innerText.toLowerCase()
        })
    }

    getCountry = () => {
        var countryId = document.getElementById('country');
        this.setState({
            country: countryId[countryId.selectedIndex].innerText.toLowerCase()
        })
    }

    componentDidMount() {
       document.title='Register'
    }

    registerUser = () => {

        if (this.state.name && this.state.password && this.state.emailId &&
             this.state.gender && this.state.firstname && this.state.lastname && this.state.country) {
            fetch(`http://localhost:3002/insertdata`, {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.name,
                    password: this.state.password,
                    email: this.state.emailId,
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    gender: this.state.gender,
                    country: this.state.country
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => res.json()).then((result) => {
                result.success && this.props.history.push('/login')  
            })
        } else {
            alert('Please Fill All Input Fields')
        }
    }


    

    render() {

        return (
            <React.Fragment>
                <div className='RegisterDiv'>
                    <div style={{ display: 'block', marginTop: '7%' }}>
                        <div style={{ flexWrap: 'wrap', width: '100%' }}>
                            <div className='totaldiv'>
                                <div className='logininformation'><label>Register Here</label></div>

                                <div className='flexdiv'>
                                    <label>Name</label><input className='nameinput' type='text' id='name' value={this.state.name} onChange={(e) => this.setName(e)}></input>
                                </div>
                                <div className='flexdiv'>
                                    <label>Password</label><input className='pwdinput' type='password' id='name' value={this.state.password} onChange={(e) => this.setPassword(e)}></input>
                                </div>
                                <div className='flexdiv'>
                                    <label>Email</label><input className='emailInput' type='text' id='emailId' value={this.state.emailId} onChange={(e) => this.setEmail(e)}></input>
                                </div>
                                <div className='flexdiv'>
                                    <label>First name</label><input type='text' className='passwordInput' id='password' value={this.state.firstname} onChange={(e) => this.firstname(e)}></input>
                                </div>

                                <div className='flexdiv'>
                                    <label>Last name</label><input type='text' className='confirmpwdInput' id='confirmpassword' value={this.state.lastname} onChange={(e) => this.lastname(e)}></input>
                                </div>

                                <div className='flexdiv' >
                                    <label>Gender</label><select className='genderInput' id='gender' onChange={this.getGender}>
                                    <option value={0}>Select Gender</option>
                                        <option value={1}>Male</option>
                                        <option value={2}>Female</option>

                                    </select>
                                </div>


                                <div className='flexdiv'>
                                    <label>Country</label><select className='countryInput' id='country' onChange={this.getCountry}>
                                        <option value={0}>Select Country</option>
                                            <option value={1}>India</option>
                                            
                                    </select>
                                </div>

                                <div className='checkboxdiv'>
                                    <input type='checkbox' checked={this.state.checked} onChange={this.check} />
                                    <p className='agree'>Agree the terms and conditions</p>
                                </div>

                                <div className='registerbuttonDiv'>
                                    <button className='buttonstyles' onClick={this.registerUser}>Register</button>
                                </div>

                            </div>
                        </div>
                    </div> </div>

            </React.Fragment>
        );
    }

}


// const mapStateToProps = state => {
//     return { mobileNumber: state.mobileNumber }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         MobNumber: (mobnumber) => dispatch({ type: 'MobileNumber', mobnumber })
//     }
// }


export default withRouter(Registration);
