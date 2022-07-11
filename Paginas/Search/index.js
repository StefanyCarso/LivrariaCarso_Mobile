import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

export default function Pesquisa(){
  return(
    <SafeAreaView style={estilo.container}>
      <Text> Página de PESQUISA</Text>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
    paddingTop:'5%'
  }
  });