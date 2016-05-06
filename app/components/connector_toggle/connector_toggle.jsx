import { connect } from 'react-redux';
import SocketConnector from '../connector/connector.jsx';
import Disconnect from '../disconnect/disconnect.jsx';

const ToggleConnector = React.createClass({
  mixins: [ BEMixin ],

  render() {
    return (
      <div className={this.b_()}>
        {this.props.user === ''
          ? <SocketConnector />
          : <Disconnect />
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
