import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('colors component', () => {
  it('renders the colors', () => {
    const colors = [
      { name: 'red', hex: 'ff00000' },
      { name: 'blue', hex: '00ff000' }
    ];
    const wrapper = shallow(<Colors colors={colors} />);
    expect(wrapper).toMatchSnapshot();
  });
});
