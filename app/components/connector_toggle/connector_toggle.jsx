import { connect } from 'react-redux';
import SocketConnector from '../connector/connector.jsx';
import Disconnect from '../disconnect/disconnect.jsx';

const ToggleConnector = React.createClass({
  mixins: [ BEMixin ],
  disconnectWS() {
    this.props.dispatch({
      type: 'FLUSH_USER'
    });
  },
  connectWS(nickname) {
    this.props.dispatch({
      type: 'CHANGE_USER',
      user: nickname
    });
  },

  render() {
    return (
      <div className={this.b_()}>
        {this.props.user === ''
          ? <SocketConnector onSuccess={this.connectWS} />
          : <Disconnect onSuccess={this.disconnectWS} />
        }
      </div>
    );
  },
});

const mapRedux = state => {
  return {
    user: state.userRd.user
  };
};

const ToggleConnectorReduxed = connect(mapRedux)(ToggleConnector);

export default ToggleConnectorReduxed;
