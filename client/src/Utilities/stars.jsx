import React, { Component } from 'react';


class SpecialStar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fill !== this.props.fill ) {
      this.setState({fill: this.props.fill});
    }
  }
  render() {
    return (
      <svg width='23' height='25'>
        <defs>
          <linearGradient id={`progress${this.props.keyLimePie}`} x1='0' x2='1' y1='0' y2='0'>
            <stop offset={this.props.fill} stopColor='#FBBD3B'></stop>
            <stop offset='0' stopColor='#d3d3d3'></stop>
          </linearGradient>
        </defs>
        <path
          fill={`url(#progress${this.props.keyLimePie})`}
          d='M9.9 1.1L3.3 21.78 19.8 8.58 0 8.58 16.5 21.78z'
        ></path>
      </svg>
    );
  }
}

export default SpecialStar;