'use strict';

class Tick extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date().toLocaleTimeString()
    }
    this.tick = this.tick.bind(this);
    setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({time: new Date().toLocaleTimeString()});
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.time}.</h2>
      </div>
    );
  }
}
