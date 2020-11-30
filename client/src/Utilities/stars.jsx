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
      <svg width='1em' height='1em'>
        <defs>
          <linearGradient id={`progress${this.props.keyLimePie}`} x1='0' x2='1' y1='0' y2='0'>
            <stop offset={this.props.fill} stopColor='#FBBD3B'></stop>
            <stop offset='0' stopColor='#d3d3d3'></stop>
          </linearGradient>
        </defs>
        <path
          fill={`url(#progress${this.props.keyLimePie})`}
          d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'
        ></path>
      </svg>
    );
  }
}

export default SpecialStar;
