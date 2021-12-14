import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


class Nav extends Component {
    
  logout(e){
       e.preventDefault();  
       axios.post('api/logout')
          .then(response=> {
            this.props.history.push('/');
          })
          .catch(error=> {
            console.log(error);
          });
  }
  
  handleClick(e){

    e.preventDefault();
    this.props.history.push('/');

  }
  render() {

    if (this.props.link) {
      return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href={this.handleClick.bind(this)}>Basic Authentication</a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                 <a className="navbar-brand" href={this.logout.bind(this)}>{this.props.link}</a>  
              </ul>
          </div>
        </nav>
        )
    }

  //   const loginRegLink = (
  //     <ul className="navbar-nav">
  //         <li className="nav-item">
  //             <Link to="/login" className="nav-link">
  //                 Login
  //             </Link>
  //         </li>
  //         <li className="nav-item">
  //             <Link to="/register" className="nav-link">
  //                 Register
  //             </Link>
  //         </li>
  //     </ul>
  // )

  // const userLink = (
  //     <ul className="navbar-nav">
  //         <li className="nav-item">
  //             <a href="/" onClick={this.logout.bind(this)} className="nav-link">
  //                 Logout
  //             </a>
  //         </li>
  //     </ul>
  // )

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounder">
                 <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-targeet="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded= "false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar1" className="collapse navbar-collapse navbar-right">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">
                                Register
                            </Link>
                        </li>
                    </ul>
                    {/* {localStorage.usertoken ? userLink : loginRegLink} */}
                </div>
            </nav>
           
    )
  }

}

export default withRouter(Nav)