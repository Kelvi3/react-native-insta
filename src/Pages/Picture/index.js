import React, {useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Publish from '../../Component/Publish';
import { Camera } from 'expo-camera';

import CancelButton from "../../Component/CancelButton"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Photo = ({navigation}) => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = React.useState(null)
  const ref = useRef(null)


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  const _takePhoto = async () => {
    try {
      const takePic = await ref.current.takePictureAsync()
      const photo = takePic.uri
      await AsyncStorage.setItem('pic', JSON.stringify(photo))
      navigation.navigate("Publish")
    }catch (e) {
      console.log(e)
    }
  }

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    let pic = pickerResult.uri
    if (pickerResult.cancelled === true) {
      return;
    }
    try {
      await AsyncStorage.setItem('pic', JSON.stringify(pic))
      navigation.navigate("Publish")
    }catch (e) {
      console.log(e)
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  // if (image !== null || selectedImage !== null) {
  //   return (
  //     <>
  //     <View>
  //       {image === null ? 
  //         <Publish image={selectedImage.localUri} btn={() => setSelectedImage(null)}/>
  //       :
  //         <Publish image={image} btn={() => setImage(null)}/>
  //       }
  //     </View>
  //     </>
  //   );
  // }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <>
        <View style={{ flex: 1 }}>
      <Camera style={{ height: 550 }} type={type} ref={ref}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity onPress={_takePhoto}>
        <Image source={require("./button.svg.png")}
        style={{width: 60, height: 60, alignSelf: "center", marginTop: 10 }} />
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Galerie</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  button: {
    width: 70,
    backgroundColor: "black",
    margin: 20
  },
  buttonText: {
    padding: 5,
    textAlign: "center",
    color: "white",
    
  },
});


const Stack = createNativeStackNavigator();

const Picture = ({navigation}) => {


    return (
      <Stack.Navigator>
          <Stack.Screen name="Photo" component={Photo}/>  
        <Stack.Group  screenOptions={() => ({
      headerLeft: () =>  <TouchableOpacity onPress={() => navigation.navigate("Photo")}><CancelButton  /></TouchableOpacity>,
    })}>
          <Stack.Screen name="Publish" options={{title: ""}} component={Publish} />
        </Stack.Group>
      </Stack.Navigator> 
    )
}


export default Picture