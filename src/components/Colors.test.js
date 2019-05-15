import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('colors component', () => {
  it('renders the colors', () => {
    const colors = [{ name: 'red', rgb: { red: 255, green: 0, blue: 0 } }, { name: 'green', rgb: { red: 0, green: 255, blue: 0 } }, { name: 'blue', rgb: { red: 0, green: 0, blue: 255 } }];
    const wrapper = shallow(<Colors colors={colors} />);
    expect(wrapper).toMatchSnapshot();
  });
});
