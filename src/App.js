/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import { Header,Button,Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = { loggedIn: null };
  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyBi2B0tbbmPN-Da46Zldv7AJI-48Tq_NSc",
    authDomain: "fb-login-781b7.firebaseapp.com",
    databaseURL: "https://fb-login-781b7.firebaseio.com",
    projectId: "fb-login-781b7",
    storageBucket: "fb-login-781b7.appspot.com",
    messagingSenderId: "897999275723",
    appId: "1:897999275723:web:ec7caa0c9b7065d2"
  })

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn:false})
      }
    })
  }

  renderContent(){

    switch (this.state.loggedIn){
      case true:
      return Actions.home()
      case false:
        return (
           <LoginForm />
          )
      default:
        return <Spinner size="large" />
    }
    
  }
  render() {
    const store=createStore(reducers,{},applyMiddleware(ReduxThunk))
    return (
  
     
      
    <Provider store={store}>
      
        <Router />
      
    </Provider>
     
     
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
