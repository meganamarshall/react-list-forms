import React from 'react';
import PropTypes from 'prop-types';

const decimalFromHex = hex => {
  return Number.parseInt(`0x${hex}`, 16);
};

const rgbFromHex = hex => {
  return {
    red: decimalFromHex(hex.slice(1, 3)),
    green: decimalFromHex(hex.slice(3, 5)),
    blue: decimalFromHex(hex.slice(5, 7))
  };
};

function Color({ name, hex }) {
  const rgb = rgbFromHex(hex);

  const styles = {
    backgroundColor: hex,
    height: '100px',  
    width: '100px'
  };

  return (
    <li className={styles}>
      <dt>Name:</dt>
      <dd>{name}</dd>

      <dt>Hex:</dt>
      <dd>{hex}</dd>

      <dt>RGB:</dt>
      <dd>
        <p>Red - {rgb.red}</p>
        <p>Green - {rgb.green}</p>
        <p>Blue - {rgb.blue}</p>
      </dd>
    </li>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
};

export default Color;
