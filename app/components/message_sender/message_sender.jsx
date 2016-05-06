import { connect } from 'react-redux';

const MessageSender = React.createClass({
  mixins: [ BEMixin ],
  getDefaultProps() {
    return {
      messages: []
    };
  },
  onSubmit(evt) {
    evt.preventDefault();

    this.props.dispatch({
      type: 'ADD_MESSAGE',
      message: this.refs.userMessage.value,
      user: this.props.user
    });
    this.refs.userMessage.value = '';
  },

  render() {
    return (
      <form className={this.b_()} onSubmit={this.onSubmit}>
        <input className={this.b_('-userText')} ref="userMessage"
          type="text" autoFocus placeholder="Your message" />
        <button className={this.b_('-sendButton')} type="submit">Send</button>
      </form>
    );
  },
});

export default MessageSender;

const mapRedux = state => {
  return {
    messages: state.messagesRd,
    user: state.userRd.user
  };
};

const MessageSenderReduxed = connect(mapRedux)(MessageSender);

export default MessageSenderReduxed;
