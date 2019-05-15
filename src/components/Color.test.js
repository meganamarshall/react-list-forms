import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders the color', () => {
    const color = {
      name: 'blue',
      hex: 'ff0000'
    };
    const wrapper = shallow(<Color name={color.name} hex={color.hex} />);
    expect(wrapper).toMatchSnapshot();
  })
})
