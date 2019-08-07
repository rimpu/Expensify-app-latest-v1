import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Route} from 'react-router-dom';
import AppRouter ,{history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { Login,LogOut } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from '../src/firebase/firebase'

const store = configureStore();

const jsx = (
  <div>
  <Provider store={store}>
    <AppRouter />
  </Provider>
  </div>
);

let hasRendered = false;
const renderApp =() => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered =true
  }
   
}    

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{
  ReactDOM.render(jsx, document.getElementById('app'));
})

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(Login(user.uid))
    renderApp()
    if(history.location.pathname === "/"){
      history.push("/dashboard")
    }
  }else{
    store.dispatch(LogOut())
    renderApp()
    history.push("/")
  }
})