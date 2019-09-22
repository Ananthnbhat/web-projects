import React from 'react';
import { shallow, mount, render } from 'enzyme';
import User from './User';
import InputRange from 'react-input-range';

describe('User', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<User />));

  it('should render a <input /> in add user', () => {
    expect(wrapper.find('input').length).toEqual(7);
  });

  it('should render a <div /> in add user', () => {
    expect(wrapper.find('div').length).toEqual(35);
  });

  it('should call onChange first name',()=>{
    const event={
      target:{
        value:'the-value'
      }
    }
    const instance=wrapper.instance()
    jest.spyOn(instance,'onFirstChange')
    wrapper.instance().forceUpdate()
    wrapper.update()
    const input=wrapper.find('#firstName')
    input.simulate('change',event)
    expect(instance.onFirstChange).toHaveBeenCalled()
  });

  it('should call onChange last name',()=>{
    const event={
      target:{
        value:'the-value'
      }
    }
    const instance=wrapper.instance()
    jest.spyOn(instance,'onLastChange')
    wrapper.instance().forceUpdate()
    wrapper.update()
    const input=wrapper.find('#lastName')
    input.simulate('change',event)
    expect(instance.onLastChange).toHaveBeenCalled()
  });

  it('should call onChange employee id',()=>{
    const event={
      target:{
        value:'the-value'
      }
    }
    const instance=wrapper.instance()
    jest.spyOn(instance,'onEmpId')
    wrapper.instance().forceUpdate()
    wrapper.update()
    const input=wrapper.find('#empId')
    input.simulate('change',event)
    expect(instance.onEmpId).toHaveBeenCalled()
  });

  it('should call onClick on cancel button',()=>{
    const event={
      target:{
        value:'the-value'
      }
    }
    const instance=wrapper.instance()
    jest.spyOn(instance,'cancelCourse')
    wrapper.instance().forceUpdate()
    wrapper.update()
    const input=wrapper.find('#cancelBtn')
    input.simulate('click',event)
    expect(instance.cancelCourse).toHaveBeenCalled()
  });

  it('should call onClick on save button',()=>{
    const event={
      target:{
        value:'the-value'
      }
    }
    const instance=wrapper.instance()
    jest.spyOn(instance,'onAddUser')
    wrapper.instance().forceUpdate()
    wrapper.update()
    const input=wrapper.find('#addBtn')
    input.simulate('submit',event)
    expect(instance.onAddUser).toHaveBeenCalled()
  });

  it('should call onClick on update button',()=>{
    const event={
      target:{
        value:'the-value'
      }
    }
    const instance=wrapper.instance()
    jest.spyOn(instance,'onUpdate')
    wrapper.instance().forceUpdate()
    wrapper.update()
    const input=wrapper.find('#updateBtn')
    input.simulate('submit',event)
    expect(instance.onUpdate).toHaveBeenCalled()
  });

});