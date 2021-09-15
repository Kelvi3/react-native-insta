import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Instagram from '../../Pages/Instagram';
import Search from '../../Pages/Search';
import Picture from '../../Pages/Picture';
import News from '../../Pages/News';
import Profile from '../../Pages/Profile';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();


const BottomTab = () => {
  // const loged = useSelector(state => state.user.loged)
  const loged = true

  if(loged){
    return(
      <Tab.Navigator>
        <Tab.Screen name="Instagram" options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} style={{marginTop: "20%"}} />
          ),
          tabBarLabel: ""
        }} component={Instagram} />
        <Tab.Screen name="Search" options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={30} style={{marginTop: "20%"}} />
          ),
          tabBarLabel: ""
        }} component={Search}/>
        <Tab.Screen name="Picture" options={{
           headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={30} style={{marginTop: "20%"}} />
          ),
          tabBarLabel: ""
        }} component={Picture}/>
        <Tab.Screen name="News" options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={30} style={{marginTop: "20%"}} />
          ),
          tabBarLabel: ""
        }} component={News}/>
        <Tab.Screen name="Profile" options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="emoticon" color={color} size={30} style={{marginTop: "20%"}} />
          ),
          tabBarLabel: ""
        }} component={Profile} />
      </Tab.Navigator>
    )
  }else return true
}


export default BottomTab