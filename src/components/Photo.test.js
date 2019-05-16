import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';
import images from '../assets/images.jpeg';

describe('photo component', () => {
  it('renders the photo', () => {
    const wrapper = shallow(<Photo photo={images} />);
    expect(wrapper).toMatchSnapshot();
  });
});
