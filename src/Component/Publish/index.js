import React from "react"

import { Image, View, TouchableOpacity, Text, TextInput } from "react-native"

const Publish = (props) => {

  return(
    <View style={{paddingTop: 20}}>
      <View style={{alignItems: 'center'}}>
        <Image style={{width: 400, height: 300, resizeMode: "contain"}} source={{ uri: props.image }}/>
        <TextInput placeholder="Description" style={{width: 300, height: 30, borderColor: "#808080", borderWidth: 1, backgroundColor: "#E4E4E4" }} />
        <TouchableOpacity style={{backgroundColor: "green", padding: 5, width: 120}}>
          <Text style={{color: "white", textAlign: "center"}}>Poster</Text>
        </TouchableOpacity>
      </View>
      <View> 
        <TouchableOpacity onPress={props.btn} style={{backgroundColor: "red", padding: 5, width: 120, alignItems: "flex-end"}}>
          <Text style={{color: "white"}}>Recommencer la photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Publish