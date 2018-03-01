import React, {
    Component,
  } from 'react';
  
import { connect } from 'react-redux';
import {App} from './AppPresenter';
  
import {
    activateGeod,
    closeGeod
} from './action';

const mapStateToProps = (state, ownProps) => ({
    geod: state.geod,
  });
  
  const mapDispatchToProps = {
    activateGeod,
    closeGeod,
  };
  console.log(typeof App)
  const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
  
  export default AppContainer;