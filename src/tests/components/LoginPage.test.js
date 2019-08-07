import React from 'react';
import { shallow } from 'enzyme';
import {LoginButton} from '../../components/LoginPage'

test('Should render loginpage',()=>{
    const wrapper = shallow(<LoginButton AuthoriseUser= {()=>{}}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should call LoginButton ',()=>{
    const AuthoriseUser = jest.fn()
    const wrapper = shallow(<LoginButton AuthoriseUser= {AuthoriseUser}/>)
    wrapper.find('button').simulate('click')
    expect(AuthoriseUser).toHaveBeenCalled()
})