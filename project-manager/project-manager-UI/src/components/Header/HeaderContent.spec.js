import React from 'react';
import { shallow, mount, render } from 'enzyme';
import HeaderContent from './HeaderContent';
import { NavLink } from 'react-router-dom'

describe('HeaderContent', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<HeaderContent />));

   it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(7);
  });

  // it('Logo links to home', () => {
  //    expect(wrapper.find(NavLink).first().props().to).equals("/home");
  // });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});