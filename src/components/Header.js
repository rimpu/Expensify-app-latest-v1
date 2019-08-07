import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {LogOutUser} from '../actions/auth';

export const Header = (props) => {
  console.log(props)
  return (
    <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button onClick={props.LogOutUser} >Log out</button>
    </header>
  )
 
  };

const mapDispatchToProps =(dispatch)=>{
  return {
    LogOutUser : ()=> dispatch(LogOutUser())
  }
}

export default connect(undefined,mapDispatchToProps)(Header);
