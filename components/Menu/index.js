import React from 'react';
import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function Menu(){

  const navigation = useNavigation();

  return(
  
      <TouchableOpacity style = {estilo.container} onPress={()=>navigation.openDrawer()}>
        <Feather 
          name='Inicio'
          size={36}
          color='#ffd5e5'
        />
      </TouchableOpacity>
  
  );
}

const estilo = StyleSheet.create({
  container:{
    position: 'absolute',
    zIndex: 9,
    width: 70,
    height:70,
    backgroundColor:'#ffd5e5',
    alignItems: 'center',
    justifyContent: 'center',
    left:15,
    top:40,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 2,
    shadowColor: '#ffd5e5',
    shadowOpacity: 0.2,
    shadowOffset:{
      width:1,
      height:3
    }
  }
});