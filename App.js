import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/screens/home';
import {Provider} from 'react-redux';
import Store from './src/Store';
import NavigationProvider from './Navigation/provider';
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationProvider />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
