require('./messages.styl');

import DialogItem from '../dialog_item/dialog_item.jsx';
import MessageSender from '../message_sender/message_sender.jsx';
import { connect } from 'react-redux';
import * as actions from '../../complex_actions.js';

const ChatMessages = React.createClass({
  mixins: [ BEMixin ],
  getDefaultProps() {
    return {
      messages: [],
      user: ''
    };
  },
  sendUserMsg(msg) {
    const {dispatch, user} = this.props;
    dispatch(actions.postViaConnection(msg, user));
  },

  render() {
    let {user, messages} = this.props,
      active = user !== '';
    messages = _.get(messages, `${user}`);
    return (
      <div className={this.b_(!active ? '_disabled' : '')}>
        {messages && messages.length
          ? messages.map((data, ind) => <DialogItem {...data} key={ind} />)
          : <div>You don't have any messages yet. Try type something!</div>
        }
        {active &&
          <MessageSender onSend={this.sendUserMsg} />
        }
      </div>
    );
  },
});

const mapRedux = state => {
  return {
    user: state.userRd.user,
    messages: state.messagesRd
  };
};

const ChatMessagesReduxed = connect(mapRedux)(ChatMessages);

export default ChatMessagesReduxed;
