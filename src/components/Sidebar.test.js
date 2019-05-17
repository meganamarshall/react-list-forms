import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('sidebar component', () => {
  it('renders the sidebar', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper).toMatchSnapshot();
  });
});
