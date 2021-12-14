import React, { Component } from 'react'


class ChatMessages extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            newMessage: '',
            users:[],
            activeUser: false,
            typingTimer: false,
        }

    }

    handleInput = e => {
        this.setState({
          newMessage: e.target.value
        });
      };

      sendMessage = e => {
        e.preventDefault()
        this.setState({
            user: this.user,
            message: this.newMessage
        })
        }

  render() {
      return (
        <div  class="card-header">Messages</div>
    )
      }
    }
export default ChatMessages;