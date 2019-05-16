import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

function Sidebar({ children }) {
  return (
    <nav classList={styles.Sidebar}>
      {children}
    </nav>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node
};

export default Sidebar;
