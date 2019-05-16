import React from 'react';
import PropTypes from 'prop-types';

function Sidebar({ children }) {
  return (
    <>
    <h1>Menu</h1>
    <p>{children}</p>
    </>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node
};

export default Sidebar;
