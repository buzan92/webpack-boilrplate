import React from 'react';
import propTypes from 'prop-types';

class Hello extends React.Component {
  render() {
    let test = 'dddd';
    return <div>{this.props.hello}</div>;
  }
}

Hello.propTypes = {
  hello: propTypes.string
};
export default Hello;
