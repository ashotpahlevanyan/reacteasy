'use strict';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstName: 'Harper',
        lastName: 'Perez'
      }
    }
    this.formatName = this.formatName.bind(this);
  }

  formatName() {
    return this.state.user.firstName + ' ' + this.state.user.lastName;
  }

  render() {
    return (
      <h1>
        Hello, {this.formatName()}!
      </h1>
    );
  }
}
