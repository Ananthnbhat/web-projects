import React from 'react';
import { shallow } from 'enzyme';
import Task from './Task';

describe('Task', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Task />));

  it('should render a <input /> in Task', () => {
    expect(wrapper.find('input').length).toEqual(11);
  });

  it('should render a <div /> in Task', () => {
    expect(wrapper.find('div').length).toEqual(55);
  });

  it('should render a <button /> in Task', () => {
    expect(wrapper.find('button').length).toEqual(11);
  });

});