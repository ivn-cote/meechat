require('./index.styl');

import Messages from './components/messages/messages.jsx';
import SocketConnector from './components/connector/connector.jsx';
import Disconnect from './components/disconnect/disconnect.jsx';

const mockData = {
  'ivn': [
    { text: 'Hi there' },
    { text: 'Hi user', sender: 'Meedoc' }
    ]
  },
  App = React.createClass({
    mixins: [ BEMixin ],
    getInitialState() {
      return {
        isConnected: false,
        user: ''
      };
    },
    toggleConnected(user) {
      this.setState({ isConnected: !!user, user: user || this.state.user });
    },

    render() {
      const {isConnected, user} = this.state;
      return (
        <div className={this.b_()}>
          {isConnected
            ? <Disconnect onSuccess={this.toggleConnected} />
            : <SocketConnector onSuccess={this.toggleConnected} />
          }
          <Messages messages={_.get(mockData, user)} active={isConnected} />
        </div>
      );
    },
  });

ReactDOM.render((
  <App />
), document.getElementById('content'));

