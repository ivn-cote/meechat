require('./messages.styl');

import DialogItem from '../dialog_item/dialog_item.jsx'
import MessageSender from '../message_sender/message_sender.jsx'

const ChatMessages = React.createClass({
  mixins: [ BEMixin ],
  getDefaultProps() {
    return {
      messages: [],
      active: false
    };
  },

  render() {
    const {active, messages} = this.props;
    return (
      <div className={this.b_(!active ? '_disabled' : '')}>
        {messages.length
          ? messages.map((data, ind) => <DialogItem {...data} key={ind} />)
          : <div>You don't have any messages yet. Try type something!</div>
        }
        {active &&
          <MessageSender />
        }
      </div>
    );
  },
});

export default ChatMessages;
