import React from 'react';
import PropTypes from 'prop-types';

function Sidebar({ children }) {
  return (
    <>
    <h1>Menu</h1>
    <nav>{children}</nav>
    </>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node
};

export default Sidebar;
