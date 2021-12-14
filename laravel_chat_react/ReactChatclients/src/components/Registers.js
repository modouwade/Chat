import React, {Component} from 'react';
import {register} from './UserFunctions'


class Register extends Component {

    constructor (){
        super()
        this.state = {
            //first_name: '',
            //last_name: '',
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            name_empty: false,
            email_empty: false,
            password_empty: false,
            password_c_empty: false,
            errors : {
                email: '',
                password: ''
            } 
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    // onChange (e) {
    //     this.setState({ [e.target.name]: e.target.value})
    // }

    onChange (e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    onSubmit= e => {
        e.preventDefault()

        const newUser = {
           // name: this.state.first_name + ' ' + this.state.last_name,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        }
       
        const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        this.setState({
            //first_name: '',
            //last_name: '',
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            name_empty: true ? " Le champs est vide":"",
            email_empty:true ? " Le champs est vide":"",
            password_empty: true ? " Le champs est vide":"",
            password_c_empty: true ? " Le champs est vide":"",
            errors : {
                email: !newUser.email.match(emailformat) ?
                "Invalid Email" : "",
                password: newUser.password.length < 6 ?
                "Password should be more than 6 characters" : ""
            } 
        })
        if (this.state.errors.email  && this.state.errors.password) {
            register(newUser).then(res => {
                this.props.history.push(`/login`)
            })
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit= {this.onSubmit}>
                            <h1 className="h3 mb-3 font-weihht-normal">
                                Register
                            </h1>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="name" 
                                className="form-control"
                                name="name"
                                placeholder="Enter name"
                                value={this.state.name}
                                onChange={this.onChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" 
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.onChange.bind(this)}/>
                            </div>
                            {<div className="alert alert-danger"
                                style={{ visibility: this.state.errors.email || this.state.email_empty ? 'visible' : 'hidden' }}>{this.state.errors.email}
                                </div>}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" 
                                className="form-control"
                                name="password"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={this.onChange.bind(this)}/>
                                
                            </div>
                            {<div className="alert alert-danger"
                                style={{ visibility: this.state.errors.password || this.state.password_empty ? 'visible' : 'hidden' }}>{this.state.errors.password}
                                </div>}
                            <div className="form-group">
                                <label htmlFor="password confirmation">Password confirmation</label>
                                <input type="password" 
                                className="form-control"
                                name="password_confirmation"
                                placeholder="Enter password confirmation"
                                value={this.state.password_confirmation}
                                onChange={this.onChange.bind(this)}/>
                                {/* {<div className="alert alert-danger"
                                style={{ visibility: this.state.password_c_empty ? 'visible' : 'hidden' }}> {this.state.password_c_empty}
                                </div>} */}
                            </div>
                            <button type="submit" onClick = { this.onSubmit.bind(this)} className="btn btn-lg btn-primary btn-block">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Register





// import React, { Component } from 'react'
// import { register } from './UserFunctions'

// class Register extends Component {
//     constructor() {
//         super()
//         this.state = {
//             first_name: '',
//             last_name: '',
//             email: '',
//             password: '',
//         }
//         this.onChange = this.onChange.bind(this)
//         this.onSubmit = this.onSubmit.bind(this)
//     }

//     onChange (e) {
//         this.setState({ [e.target.name]: e.target.value })
//     }

//     onSubmit (e) {
//         e.preventDefault()

//         const user = {
//             first_name: this.state.first_name,
//             last_name: this.state.last_name,
//             email: this.state.email,
//             password: this.state.password
//         }
//         const errors = {}
//         const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//         errors.email = !user.email.match(emailformat) ?
//             "Invalid Email" : ""
//         errors.password = user.password.length < 6 ?
//             "Password should be more than 6 characters" : ""
//         console.log(errors)

//         if (errors.email === "" && errors.password === "") {
//             register(user).then(res => {
//                 this.props.history.push(`/login`)
//             })
//         }
//     }

//     render () {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-6 mt-5 mx-auto">
//                         <form noValidate onSubmit={this.onSubmit}>
//                             <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
//                             <div className="form-group">
//                                 <label htmlFor="first_name">First Name</label>
//                                 <input type="text"
//                                     className="form-control"
//                                     name="first_name"
//                                     placeholder="Enter First Name"
//                                     value={this.state.first_name}
//                                     onChange={this.onChange} />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="last_name">Last Name</label>
//                                 <input type="text"
//                                     className="form-control"
//                                     name="last_name"
//                                     placeholder="Enter Last Name"
//                                     value={this.state.last_name}
//                                     onChange={this.onChange} />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="email">Email Address</label>
//                                 <input type="email"
//                                     className="form-control"
//                                     name="email"
//                                     placeholder="Enter Email"
//                                     value={this.state.email}
//                                     onChange={this.onChange} />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="password">Password</label>
//                                 <input type="password"
//                                     className="form-control"
//                                     name="password"
//                                     placeholder="Enter Password"
//                                     value={this.state.password}
//                                     onChange={this.onChange} />
//                             </div>
//                             <button type="submit" className="btn btn-lg btn-primary btn-block">
//                                 Register
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Register

