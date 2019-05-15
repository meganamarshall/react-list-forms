import React from 'react'; 
import { shallow } from 'enzyme';
import TextFormatter from './TextFormatter';

describe('textformatter component', () => {
  it('renders the text formatter', () => {
    const wrapper = shallow(<TextFormatter />);
    expect(wrapper).toMatchSnapshot();
  });
});
