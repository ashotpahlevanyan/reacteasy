'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ liked: true });
  }

  render() {
    if (this.state.liked) {
      return 'You liked us.';
    }

    return (
      <button onClick={this.handleClick}>Like</button>
    );
  }
}
