import React from 'react';

const Message = (props) => {
    return(
            <div class="chat-body clearfix">
                <div class="header">
                    <strong class="primary-font">
                        { props.message.user.name }
                    </strong>
                </div>
                <p>
                    {props.message.message}
                </p>
            </div>
        )
}
export default Message;
