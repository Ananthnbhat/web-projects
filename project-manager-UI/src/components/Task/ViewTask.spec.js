import React from 'react';
import { shallow } from 'enzyme';
import ViewTask from './ViewTask';

describe('ViewTask', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<ViewTask />));

  it('should render a <div /> in view task', () => {
    expect(wrapper.find('div').length).toEqual(22);
  });

  it('should render a <form /> in view task', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render a <table /> in view task', () => {
    expect(wrapper.find('table').length).toEqual(2);
  });

  it('should render a <td /> in view task', () => {
    expect(wrapper.find('td').length).toEqual(0);
  });

  it('should render a <tr /> in view task', () => {
    expect(wrapper.find('tr').length).toEqual(2);
  });

  it('should render a <button /> in add user', () => {
    expect(wrapper.find('button').length).toEqual(7);
  });

});