const Disconnect = React.createClass({
  mixins: [ BEMixin ],
  getDefaultProps() {
    return {
      onSuccess: _.noop
    };
  },
  onBtnClick() {
    this.props.onSuccess();
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
