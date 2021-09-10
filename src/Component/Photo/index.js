import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { TextInput } from 'react-native-gesture-handler';

export default function Photo() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  const _takePhoto = async () => {
    const photo = await ref.current.takePictureAsync()
    setImage(photo.uri)
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if(image.length > 1){
    return (
      <>
      <View >
        <Image
          source={{ uri: image }}
          style={{width: 500,
            height: 300,
            marginTop: 30,
            resizeMode: "contain",
            alignSelf: "center"
          }}
        />
        <TextInput/>
      </View>
      <View>
        <TouchableOpacity onPress={setImage('')} style={{backgroundColor: "blue"}}>
          <Text style={{color: "white"}}>Recommencer</Text>
        </TouchableOpacity>
      </View>
      </>
    );
  }
  return (
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
  );
}
