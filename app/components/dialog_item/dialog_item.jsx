require('./dialog_item.styl');

const DialogItem = React.createClass({
  mixins: [ BEMixin ],
  getDefaultProps() {
    return {
      text: '',
      sender: ''
    };
  },

  render() {
    const {sender, text} = this.props;
    return (
      <div className={this.b_(!sender ? '_mine' : '')}>
        {text}
      </div>
    );
  },
});

export default DialogItem;
