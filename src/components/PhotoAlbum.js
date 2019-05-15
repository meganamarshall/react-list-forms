import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum({ photos, title }) {
  return (
    <section>
      <h2>{title}</h2>
      <Photos photos={photos} />
    </section>
  );
}

PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default PhotoAlbum;
