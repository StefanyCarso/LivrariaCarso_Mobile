import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView, Image, Button, TouchableHighlight} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import Menu from '../../components/Menu';

export default function Home({navigation}){
  return(
    <SafeAreaView style={estilo.container}>
      
      {/* CABEÇALHO */}
      <SafeAreaView style={{margin: 10}} >
        <Image source={{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5c%2Fd7%2F77%2F5cd777e23c898bdad770508ab21bf318.jpg&f=1&nofb=1'}} style={css.imagemCab}/>
      </SafeAreaView>

      {/*"cadastro"*/}
      <SafeAreaView style={{margin: 10, flexDirection:'row',}} >
        <TouchableHighlight 
               onPress={()=> navigation.jumpTo('Search')}
               activeOpacity={0.6}
               underlayColor='#FA8072'
               style={css.buttonCard2}>
          <Text style={css.textCard}> Buscar </Text>
            </TouchableHighlight>
          <TouchableHighlight 
               onPress={()=> navigation.jumpTo('Shopping')}
               activeOpacity={0.6}
               underlayColor='#FA8072'
               style={css.buttonCard2}>
          <Text style={css.textCard}> Compras </Text>
            </TouchableHighlight>
           <TouchableHighlight 
               onPress={()=> navigation.jumpTo('Discounts')}
               activeOpacity={0.6}
               underlayColor='#FA8072'
               style={css.buttonCard2}>
          <Text style={css.textCard}> Descontos </Text>
          
            </TouchableHighlight>
      </SafeAreaView>
 
 {/* itens */}
       <SafeAreaView style={{margin:5}} >
        <Image source={{uri:'https://www.hypeness.com.br/1/2017/06/257e3449905325.592e0b76348b0.jpg'}} style={css.imagemEx}/>
      </SafeAreaView>

{/* itens*/}
       <SafeAreaView  style={css.prods2}>
      <Text style={css.testinho}>Ofertas do dia</Text>
       <SafeAreaView  style={{margin: 10, flexDirection:'row',}} >
        <Image source={{uri:'https://www.livrariasfamiliacrista.com.br/media/catalog/product/cache/1/image/800x/56819907b1c49a4bc751319b3fccb0da/s/e/sem-t_tulo-2_21.jpg'}} style={css.imagemIt}/>
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KR0Nk-NUIka5Of_g7Nh_eTzGw0ipPHO1SA&usqp=CAU'}} style={css.imagemIt}/>
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYU9QqN1Ll3AadthcsrkhisLJyHsQGV6HHeA&usqp=CAU'}} style={css.imagemIt}/>
        <Image source={{uri:'https://www.estantediagonal.com.br/wp-content/uploads/2017/10/IMG_7201-1024x575.jpg'}} style={css.imagemIt}/>
        </SafeAreaView>
      </SafeAreaView>

 {/* Botões de cadastro */}
      <SafeAreaView style={css.prods}>
            <Text style={css.ttestinho}> Crie uma conta para melhorar sua experiencia!</Text>

             <TouchableHighlight 
               onPress={()=> navigation.jumpTo('Cad')}
               activeOpacity={0.6}
               underlayColor='#FA8072'
               style={css.buttonCard}>
          <Text style={css.textCard}>Criar conta</Text>
            </TouchableHighlight>

            <TouchableHighlight 
               onPress={()=>navigation.jumpTo('User')}
               activeOpacity={0.6}
               underlayColor='#FA8072'
               style={css.buttonCard}>
          <Text style={css.textCard}>Acessar a minha conta</Text>
            </TouchableHighlight>
      </SafeAreaView>

   
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

  const css = StyleSheet.create({

  imagemCab:{
    width:300,
    height:150,
    resizeMode:'cover',
    alignItems:'center',
    borderRadius:30
  },

  imagemEx:{
    width:380,
    height:50,
    resizeMode:'cover',
    alignItems:'center',
    borderRadius:5,
    marginTop: 20
  },

  imagemIt:{
    width:70,
    height:70,
    resizeMode:'cover',
    alignItems:'center',
    borderRadius:5,
    marginTop: 30,
    margin: 10
  },


  ttestinho:{
    alignSelf:'center',
    color: '#000',
    marginTop:10,
    fontSize:15,
  },
   testinho:{
    alignSelf:'center',
    color: '#F08080',
    fontWeight:'bold',
    marginTop:10,
    fontSize:20,
  },
  
  textCard:{
    alignSelf:'center',
    color: '#FFF5EE',
    fontWeight: 'bold',
  },

  prods:{
    flex:1,
    width:300,
    backgroundColor: '#fff5ee',
    alignItems:'Center',
    marginTop:10,
    flexDirection:'space-row',
    borderRadius: 10,
  
  },

    prods2:{
    flex:1,
    width:380,
    backgroundColor: '#fff5ee',
    alignItems:'Center',
    flexDirection:'space-row',
    borderRadius: 10,
    margin: 10
  },
  
  
  buttonCard:{
    backgroundColor: '#ffd5e5',
    color:'#fff', 
    width: '90%',  
    height: 35,
    fontSize: 20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 20,
    marginTop: 10,
  },
    buttonCard2:{
    backgroundColor: '#F08080',
    color:'#fff', 
    width: '30%',  
    height: 35,
    fontSize: 20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 90,
    marginTop: 20,
    margin: 10
  },



});