import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('footer component', () => {
  it('renders the footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
