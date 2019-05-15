import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('colors component', () => {
  it('renders the colors', () => {
    const rgb = { red: 255, green: 0, blue: 0 };
    const wrapper = shallow(<Color name="red" rgb={rgb} />);
    expect(wrapper).toMatchSnapshot();
  });
});
