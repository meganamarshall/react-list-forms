import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';
import styles from './Colors.css';

function Colors({ colors }) {
  const colorList = colors.map(({ name, hex, rgb }) => (
    <li key={`${hex}`} classList={styles.name}>
      <Color name={name} hex={hex} rgb={rgb} />
    </li>
  ));

  return (
    <ul>
      {colorList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;
