const MessageSender = React.createClass({
  mixins: [ BEMixin ],
  getDefaultProps() {
    return {
      messages: []
    };
  },
  onSubmit(evt) {
    evt.preventDefault();
    console.log('submit')
  },

  render() {
    return (
      <form className={this.b_()} onSubmit={this.onSubmit}>
        <input className={this.b_('-userText')} type="text" autoFocus placeholder="Your message" />
        <button className={this.b_('-sendButton')} type="submit">Send</button>
      </form>
    );
  },
});

export default MessageSender;
