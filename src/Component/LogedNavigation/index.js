import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../Pages/SignIn';
import SignUp from '../../Pages/SignUp';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();

const LogedNavigation = () => {

  // const loged = useSelector(state => state.user.loged)
  const loged = true
  if(loged === false){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}> 
          <Stack.Screen name="SignIn" component={SignIn} />  
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator> 
    )
  } else return true
}


export default LogedNavigation