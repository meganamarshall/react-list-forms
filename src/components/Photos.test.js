import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';
import candyByColor from '../assets/candyByColor.jpg';
import gettyImages from '../assets/gettyimages-649680072.jpg';
import images from '../assets/images.jpeg';
import othercandy from '../assets/othercandy.jpg';

describe('photos component', () => {
  it('renders the photos', () => {
    const photoArray = [
      candyByColor,
      gettyImages,
      images,
      othercandy
    ];
    const wrapper = shallow(<Photos photos={photoArray} />);
    expect(wrapper).toMatchSnapshot();
  });
});
