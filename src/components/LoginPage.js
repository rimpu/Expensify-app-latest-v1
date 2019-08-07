import React from 'react'
import {connect} from 'react-redux'
import {AuthoriseUser} from '../actions/auth'

export const LoginButton = ({ AuthoriseUser }) => (
    <div>
      <button onClick={AuthoriseUser}>Login</button>
    </div>
  );
  
  const mapDispatchToProps = (dispatch) => ({
    AuthoriseUser: () => dispatch(AuthoriseUser())
  });

export default connect(undefined,mapDispatchToProps)(LoginButton)