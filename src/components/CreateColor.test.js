import React from 'react';
import { shallow } from 'enzyme';
import CreateColor from './CreateColor';

describe('create color component', () => {
  it('renders the create color', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('updates name', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);

    wrapper.find('[name="name"]').at(0).simulate('change', {
      target: { name: 'name', value: 'pink' }
    });
  });

  it('updates color', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()} />);

    wrapper.find('[name="color"]').at(0).simulate('change', {
      target: { name: 'color', value: '54kshgi' }
    });
  });
});

