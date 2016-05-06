import { connect } from 'react-redux';

const Disconnect = React.createClass({
  mixins: [ BEMixin ],
  onBtnClick() {
    setTimeout(() => {
      this.props.dispatch({
        type: 'FLUSH_USER'
      });
    }, 300);
  },

  render() {
    return (
      <div className={this.b_()}>
        <button className={this.b_()} onClick={this.onBtnClick}>End Session</button>
      </div>
    );
  },
});

const mapRedux = state => {
  return {
    user: state.userRd
  };
};

const DisconnectReduxed = connect(mapRedux)(Disconnect);

export default DisconnectReduxed;
