import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './AuthStack';

const Routes = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
export default Routes;
