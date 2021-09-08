import Cookies from "js-cookie";
import React, { useState }  from "react" 
import { StyleSheet, Text, View, TextInput, Pressable  } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from "react-redux";
import { logIn } from "../../redux";

const SignUp = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const dispatch = useDispatch();

  const emailRegex = /\S+@\S+\.\S+/;
  const usernameRegex = /^\S*$/;
  
  const registration = ({navigation}) => {
    emailRegex.test(email) && usernameRegex.test(username) && username.length > 3 && password.length >= 6 &&  
    fetch('http://10.0.2.2:8080/api/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "username": username,
          "email": email,
          "password": password
      })
    })
    .then((response) => response.json()) 
    .then((response) => Cookies.set("token", response.token) && dispatch(logIn()) && navigation.navigate('Home'))
    .catch((error) => console.log(error))
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 30, marginBottom: 30}}>Instogrom</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={e => setEmail(e)} 
          placeholder="E-mail"
        />
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
        <Pressable onPress={registration} style={styles.button}>
          <Text style={{color: 'white', textAlign: "center"}}>Inscription</Text>
        </Pressable>
      </View>
      <View style={styles.signin}>
        <Text>Vous avez un compte ?</Text>
        <Pressable onPress={() => navigation.navigate('SignIn')}>
          <Text style={{color: "blue"}}>Connectez-vous</Text>
        </Pressable>
      </View>
    </>
  )
  
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 200,
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
  signin: {
    alignItems: "center",
    paddingTop: 15,
    marginTop: 40,
    borderColor: "#808080", 
    borderTopWidth: 1 
  }
})

export default SignUp