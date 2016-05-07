import { connect } from 'react-redux';
import SocketConnector from '../connector/connector.jsx';
import Disconnect from '../disconnect/disconnect.jsx';
import * as actions from '../../complex_actions.js';

const ToggleConnector = React.createClass({
  mixins: [ BEMixin ],
  disconnectWS() {
    actions.closeConnection();
  },
  connectWS(nickname) {
    this.props.dispatch(actions.startConnection(nickname));
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
