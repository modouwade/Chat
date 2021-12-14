import React, {Component} from 'react';

class ChatForm extends Component {

    // constructor (){
    //     super()
    //     this.state = {
    //         messages: [],
    //     }
    //         this.onChange = this.onChange.bind(this)
    //         this.onSubmit = this.onSubmit.bind(this)
    // }

    // onChange (e) {
    //     this.setState({
    //         [e.target.messages]:e.target.value
    //     })
    // }
    // onSubmit (e) {
    //     e.preventDefault()
    //     const UserM = {
    //        user : this.user,
    //        messages: this.state.messages
    //     }
    //     axios.post('/messages',UserM,{
    //             header: {'Content-type': 'application/json'}
    //         })
    //         .then(response => {
    //         console.log(response.data)
    //         })
    //         .then(res => {
    //         let msgs = this.state.messages;
    //         msgs.push(this.refs.input.value);
    
    //         this.setState({messages: msgs});
    //         this.refs.input.value = '';
    //     })
        
    // }
    // render(){
    //     return(
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-md-6 mt-5 mx-auto">
    //                     <form noValidate onSubmit= {this.onSubmit}>
    //                         <div className="form-group">
    //                            <input 
    //                             id="btn-input" 
    //                             type="text" 
    //                             name="message" 
    //                             className="form-control input-sm" 
    //                             placeholder="Type your message here..."
    //                             // value={this.state.messages}
    //                             onChange={this.onChange.bind(this)}
    //                             />
    //                         </div>
    //                         <span class="input-group-btn">
    //                             {/* <button type="submit" onClick = { this.onSubmit.bind(this)} className="btn btn-lg btn-primary btn-block">
    //                             Send
    //                             </button>                       */}
    //                             <button class="btn btn-primary btn-sm" id="btn-chat">
    //                                 Send
    //                             </button>
    //                         </span>
    //                        </form>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }


    constructor(){
        super()
        this.state = {
            user:'',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            message: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.sendMessage(this.state.user,this.state.message)
        this.setState({
            message: ''
        })

    }
    render() {
        return (
            <form 
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input
                    disabled={this.props.disabled}
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type and hit enter to send message"
                    type="text" />
                <button class="btn btn-primary btn-sm" id="btn-chat">
                   Send
               </button>
            </form>
        )
    }
    
}

export default ChatForm;