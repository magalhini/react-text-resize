import React, { Component } from 'react';
import PropTypes from 'prop-types';

const mapRange = (n, inMin, inMax, outMin, outMax) => {
  const value = (n - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;

  if (value < outMin) return outMin;
  if (value > outMax) return outMax;
  return value;
};

class TextFit extends Component {
  constructor(props) {
    super(props);

    this.limits = {
      cap: parseInt(props.capAt, 10),
      min: parseInt(props.min, 10),
      max: parseInt(props.max, 10),
    };

    this.getSize = this.getSize.bind(this);
    this.state = {
      fontSize: 16,
      totalChars: 0,
    };
  }

  componentDidMount() {
    this.getSize();
  }

  componentDidUpdate() {
    if (this.area.innerHTML.split('').length !== this.state.totalChars) {
      this.getSize();
    }
  }

  getSize() {
    const chars = this.area.innerHTML.split('').length;
    const size = mapRange(chars, this.limits.cap, 0, this.limits.min, this.limits.max);
    this.setState({ fontSize: Math.abs(size) });
  }

  render() {
    const fontSize = this.state.fontSize;
    return (
      <div {...this.props}>
        <div
          style={{ fontSize }}
          className={this.props.className}
          ref={(area) => this.area = area}
        >
          { this.props.children }
        </div>
      </div>
    );
  }
}

TextFit.propTypes = {
  className: PropTypes.string,
  capAt: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  children: PropTypes.element,
};

TextFit.defaultProps = {
  capAt: 300,
  min: 16,
  max: 32,
  children: {},
  className: '',
};

export default TextFit;
