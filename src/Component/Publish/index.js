import React, { useEffect, useState } from "react"

import { Image, View, TouchableOpacity, Text, TextInput } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Publish = () => {
  const [pic, setPic] = useState("")
  
  useEffect(() => {
    getPic()
  }, [])
  
  const getPic = async () => {
    try {
      const value = await AsyncStorage.getItem("pic")
      setPic(value)
      return value
    } catch (e) {
      console.log(e)
    }
  }
  


  if (pic !== ""){ 
    console.log(pic)
    // , resizeMode: "contain", marginBottom: 5
    return(
      <View style={{paddingTop: 20}}>
        <View style={{alignItems: 'center'}}>
          <Image style={{width: 400, height: 300}} source={{uri: pic }}/>
          <TextInput placeholder="Description" style={{padding: 5, marginBottom: 5, width: 300, height: 30, borderColor: "#808080", borderWidth: 1, backgroundColor: "#E4E4E4" }} />
        </View>
      </View>
    )
  }else return <View/>
}

export default Publish