import React from 'react';
import { shallow } from 'enzyme';
import Project from './Project';

describe('Project', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Project />));

    it('should render a <input /> in project', () => {
        expect(wrapper.find('input').length).toEqual(9);
    });

    it('should render a <div /> in project', () => {
        expect(wrapper.find('div').length).toEqual(51);
    });

    it('should render a <form /> in project', () => {
        expect(wrapper.find('form').length).toEqual(1);
    });

    it('should render a <table /> in project', () => {
        expect(wrapper.find('table').length).toEqual(2);
    });

    it('should render a <tr /> in project', () => {
        expect(wrapper.find('tr').length).toEqual(2);
    });

    it('should render a <button /> in project', () => {
        expect(wrapper.find('button').length).toEqual(8); 
    });

});