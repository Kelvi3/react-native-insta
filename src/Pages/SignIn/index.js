import Cookies from "js-cookie";
import React, { useState }  from "react" 
import { StyleSheet, Text, View, TextInput, Pressable  } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from "react-redux";
import { logIn } from "../../redux";
import { useSelector } from "react-redux";


const SignIn = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const dispatch = useDispatch();
  const loged = useSelector(state => state.user.loged)

  const connection = () => {
    fetch('http://10.0.2.2:8080/api/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "username": username,
          "password": password
      })
    })
    .then((response) => response.json()) 
    .then((response) => {  
        response.token &&
        Cookies.set("token", response.token) 
        dispatch(logIn())
        navigation.navigate('Instagram') 
    })
    .catch((error) => console.log(error))
  }


  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 30, marginBottom: 30}}>Instogrom</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={e => setUsername(e)} 
          placeholder="Nom d'utilisateur"
        />
        <View style={{flexDirection: "row"}}>
          <TextInput 
            style={styles.input} 
            onChangeText={e => setPassword(e)}
            placeholder="Mot de passe"
            secureTextEntry={hidePass}
          />
          <Icon 
            name={hidePass ? 'eye-slash' : 'eye'}
            size={15}
            color="grey"
            onPress={() => setHidePass(!hidePass)}
            style={{position: "absolute", left: "80%", top: "25%"}}
          />
        </View>
        <Pressable style={styles.button} onPress={connection}>
          <Text style={{color: 'white', textAlign: "center"}}>Connexion</Text>
        </Pressable>
      </View>
      <View style={styles.signup}>
        <Text>Vous n’avez pas de compte ?</Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: "blue"}}>Inscrivez-vous</Text>
        </Pressable>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 250,
  }, 
  input: {
    borderColor: "#808080",
    borderWidth: 1,
    padding: 6, 
    width: 350,
    borderRadius: 5,
    backgroundColor: "#E4E4E4",
    marginBottom: 15
  }, 
  button: {
    backgroundColor: "#3E95F6",
    width: 350,
    padding: 10,
    borderRadius: 5
  },
  signup: {
    alignItems: "center",
    paddingTop: 15,
    marginTop: 40,
    borderColor: "#808080", 
    borderTopWidth: 1 
  }
})

export default SignIn