import React, {Component} from 'react'
import {fetchMessages, addMessage} from './listFunction'
//https://www.npmjs.com/package/@okta/okta-react
class Message extends Component {
    constructor(){
        super()
        this.state = {
            user:'',
            message:'',
            items: []
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount(){
        this.getAll()
    }
    

    onChange = e => {
        this.setState({
            [e.target.message]:e.target.value
        })
    }

    getAll = () => {
        fetchMessages().then(data => {
            this.setState({
                message: '',
            },
            () => {
                console.log(this.state.items)
            })
        })
    }

    onSubmit = e => {
        e.preventDefault()
        addMessage(this.state.message).then(() => {
            this.getAll()
        })
        this.setState({
            message: '',
            
        })
    }

    
    render() {
       
        return (
            <div>
            <ul className="chat">
            <li className="left clearfix">
            {this.state.items.map((item, index) => (
            <div key = {index}>
                <div class="chat-body clearfix">
                    <div className="header">
                        <strong class="primary-font">
                            {item.user.name }
                        </strong>
                    </div>
                    <p>
                        {item.message}
                    </p>
                </div>
            </div>
            ))}
        </li>
        </ul>
            <div className="col-md-12">
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group row">                     
                            <div className="col-md-12">
                                <input type="text"
                                 className="form-control"
                                 name="message"
                                 placeholder="Type and hit enter to send message"
                                 onChange={this.onChange.bind(this)}
                                 />
                                <button className="btn btn-primary btn-sm" id="btn-chat">
                                Send
                               </button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        )
    }

}

export default Message;