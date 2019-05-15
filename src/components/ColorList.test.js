import React from 'react';
import { shallow } from 'enzyme';
import ColorList from './ColorList';

describe('colorlist component', () => {
  it('renders the colorlist', () => {
    const wrapper = shallow(<ColorList />);
    expect(wrapper).toMatchSnapshot();
  });
});
