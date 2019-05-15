import React from 'react';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import candyByColor from '../assets/candyByColor.jpg';
import gettyImages from '../assets/gettyimages-649680072.jpg';
import images from '../assets/images.jpeg';
import othercandy from '../assets/othercandy.jpg';

export default function App() {
  const photos = [
    candyByColor,
    gettyImages,
    images,
    othercandy
  ];

  return (
    <>
      <Header />
      <PhotoAlbum title="Megan" photos={photos} />
    </>
  );
}

