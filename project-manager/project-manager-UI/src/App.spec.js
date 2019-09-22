import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import HeaderContent from './components/Header/HeaderContent'

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));
  
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Header Component', () => {
    expect(wrapper.containsMatchingElement(<HeaderContent />)).toEqual(true);
  });

   it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});