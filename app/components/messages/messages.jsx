require('./messages.styl');

const ChatMessages = React.createClass({
  mixins: [ BEMixin ],
  getDefaultProps() {
    return {
    };
  },

  render() {
    return (
      <div className={this.b_()}>
        Messages Here
      </div>
    );
  },
});

export default ChatMessages;
