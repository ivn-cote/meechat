require('./message_sender.styl');

const MessageSender = React.createClass({
  mixins: [ BEMixin, PureRenderMixin ],
  getDefaultProps() {
    return {
      onSend: _.noop
    };
  },
  onSubmit(evt) {
    evt.preventDefault();

    this.props.onSend(this.refs.userMessage.value);
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
