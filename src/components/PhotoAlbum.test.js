import React from 'react';
import { shallow } from 'enzyme';
import PhotoAlbum from './PhotoAlbum';
import candyByColor from '../assets/candyByColor.jpg';
import gettyImages from '../assets/gettyimages-649680072.jpg';
import images from '../assets/images.jpeg';
import othercandy from '../assets/othercandy.jpg';

describe('photoalbum component', () => {
  it('renders the photo album', () => {
    const title = 'Hello';
    const photos = [
      candyByColor,
      gettyImages,
      images,
      othercandy
    ];
    const wrapper = shallow(<PhotoAlbum title={title} photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
