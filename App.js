import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SignUp from './src/Pages/SignUp';
import SignIn from './src/Pages/SignIn';
import Home from './src/Pages/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cookies from 'js-cookie';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}> 
            <Stack.Screen name="SignIn" component={SignIn} />  
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home"   component={Home} /> 
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App 


