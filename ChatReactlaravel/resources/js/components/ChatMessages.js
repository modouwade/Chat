import React, {Component} from 'react'
import Message from './Message'


class ChatMessages extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         name: '',
    //         message: []
    //     }
    // }
    
    // fetchMessages(e){
    //     e.preventDefault()
    //     axios.get('/messages').then(response => {
    //         console.log(response.data)
    //          return response.data;
    //     });
    // }
    // componentDidMount() {

    //     axios.get('/messages').then(response => {
    //         console.log(response.data)
    //          return response.data;
    //     })
    //     .then(res => {
    //       this.setState({
    //           name: res.user.name,
    //           message:res.user.message
    //       })
    //     })
    //   }

    render(){
        return (
        <ul className="chat">
            <li className="left clearfix">
                {/* <div className="chat-body clearfix">
                    <div className="header">
                        <strong className="primary-font">
                            {this.state.name}
                        </strong>
                    </div>
                    <p>
                      {this.state.message}
                    </p>
                </div> */}
                {this.props.messages.map((message, index) => {
                    return(
                        <Message key={index} message={message} />
                    )
                    })}
            </li>
        </ul>
        )
    }
}

export default ChatMessages