import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import SignUp from './src/Pages/SignUp';
import SignIn from './src/Pages/SignIn';
import Instagram from './src/Pages/Instagram';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cookies from 'js-cookie';
import { Provider, useSelector } from 'react-redux';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

// screenOptions={{ headerShown: false }}

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator> 
            <Stack.Screen name="SignIn" component={SignIn} />  
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Instagram" component={Instagram} /> 
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App 


