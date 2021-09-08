import React from "react" 
import { StyleSheet, Text, View, TextInput, Pressable  } from "react-native";

const SignIn = ({navigation}) => {

  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 30, marginBottom: 30}}>Instogrom</Text>
        <TextInput style={styles.input} placeholder="E-mail ou nom d'utilisateur"/>
        <TextInput style={styles.input} placeholder="Mot de passe"/>
        <Pressable style={styles.button}>
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