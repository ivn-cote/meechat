import { connect } from 'react-redux';

const SocketConnector = React.createClass({
  mixins: [ BEMixin ],
  onTryConnect(evt) {
    evt.preventDefault();
    const nickname = this.refs.nickname.value;
    setTimeout(() => {
      this.props.dispatch({
        type: 'CHANGE_USER',
        user: nickname
      });
    }, 300);
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

const mapRedux = state => {
  return {
    user: state.userRd
  };
};

const SocketConnectorReduxed = connect(mapRedux)(SocketConnector);

export default SocketConnectorReduxed;
