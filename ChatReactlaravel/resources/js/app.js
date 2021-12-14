/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatMessages from './components/ChatMessages';
import ChatForm from './components/ChatForm';

class App extends Component {
  constructor(){
    super()
    this.state = {
      user:'',
      messages: [],
    }
  }
  componentDidMount() {
        axios.get('/messages').then(response => {
            console.log(response.data)
            this.messages = response.data;
        })
        .then(response => {
          this.setState({
            user: this.messages.user,
            message:this.messages.messages
          })
        })
    }

    addMessage(message) {
        this.messages.push(message);

        axios.post('/messages', message).then(response => {
          console.log(response.data);
        });
    }
    render() {
          return (
            <div className="container">
              <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                      <div classclassName="panel panel-default">
                          <div className="panel-heading">Chats</div>
                          <div className="panel-body">
                              <ChatMessages 
                              user={this.state.user}
                              message={this.state.messages}/>
                          </div>
                          <div className="panel-footer">
                              <ChatForm addMessage={this.addMessage} />
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          )
      }
}
if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
export default App;
