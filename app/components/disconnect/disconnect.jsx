const Disconnect = React.createClass({
  mixins: [ BEMixin ],
  getDefaultProps() {
    return {
      onSuccess: _.noop
    };
  },
  onBtnClick() {
    // promise for disconnect
    setTimeout(() => {
      this.props.onSuccess();
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

export default Disconnect;
