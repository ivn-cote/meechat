require('./index.styl');

import Messages from './components/messages/messages.jsx';
import ConnectorToggle from './components/connector_toggle/connector_toggle.jsx';
import { Provider } from 'react-redux';
import createStore from './store';

const
  App = React.createClass({
    render() {
      return (
        <Provider store={createStore()}>
          <div className="spa">
            <ConnectorToggle />
            <Messages />
          </div>
        </Provider>
      );
    },
  });

ReactDOM.render((
  <App />
), document.getElementById('content'));
