import * as React from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';


export default function App({navigation}) {
  return (

    <KeyboardAvoidingView style={styles.background}>
      
      <View style={styles.containerLogo}>
      <Image source={require('../assets/g2993.png')}/>
      </View>

      <View style={styles.container}>
        <TextInput
        style={styles.input}
          placeholder="Usuario" 
          autocorrect={false}
          onChangeText={()=>{} }
        />

        <TextInput
        style={styles.input}
          placeholder="Email" 
          autocorrect={false}
          onChangeText={()=>{} }
        />

        <TextInput
        style={styles.input}
          placeholder="Senha" 
          autocorrect={false}
          onChangeText={()=>{} }
        />
        
        <TextInput
        style={styles.input}
          placeholder="Repetir Senha" 
          autocorrect={false}
          onChangeText={()=>{} }
        />   

        <TouchableOpacity 
         onPress={()=> navigation.jumpTo('Home')}
         activeOpacity={0.6}
         underlayColor='#FA8072'
         style={styles.btnSubmit}>
          <Text style={styles.submitText}> Cadastrar </Text>
        </TouchableOpacity> 

        <TouchableOpacity 
         onPress={()=> navigation.jumpTo('User')}
         activeOpacity={0.6}
         underlayColor='#FA8072'
         style={styles.btnRegister}>
          <Text style={styles.registerText}> Fazer login </Text>
        </TouchableOpacity> 
      </View>
      
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff5ee'
  },
  containerLogo:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
    width:'10%',
    left:10,
  },
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:30,
    marginTop:15
  },
  input:{
    backgroundColor:'#FFF',
    width: '90%',
    marginBottom:15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding:10,
  },
  btnSubmit:{
    backgroundColor:'#FFF',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
  },

  submitText:{
    color:'#C71585',
    fontSize:18,
  },
  
  btnRegister:{
    marginTop:10,
  },
  registerText:{
    color:'#C71585'
  }
}); 
