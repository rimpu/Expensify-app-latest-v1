import React from 'react';
import { shallow } from 'enzyme';
import {Header} from '../../components/Header';

let LogOutUser, wrapper

beforeEach (()=>{
  wrapper = shallow(<Header LogOutUser ={()=> {}}/>);
  LogOutUser = jest.fn()
})
test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should call logout with button click',()=>{
  wrapper = shallow(<Header LogOutUser ={LogOutUser}/>);
  wrapper.find('button').simulate('click')
  expect(LogOutUser).toHaveBeenCalled()
})
