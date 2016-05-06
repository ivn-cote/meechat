const SocketConnector = React.createClass({
  mixins: [ BEMixin ],
  getDefaultProps() {
    return {
      onSuccess: _.noop
    };
  },
  onTryConnect(evt) {
    evt.preventDefault();
    const nickname = this.refs.nickname.value;
    this.props.onSuccess(nickname);
  },

  render() {
    return (
      <div className={this.b_()}>
        You are not connected to Meedoc
        <form onSubmit={this.onTryConnect}>
          <input ref="nickname" type="text" required placeholder="Enter your name here"/>
          <button type="submit">Connect Me</button>
        </form>
      </div>
    );
  },
});

export default SocketConnector;
