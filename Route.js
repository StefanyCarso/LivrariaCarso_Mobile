import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './Paginas/Home';
import Search from './Paginas/Search';
import Discounts from './Paginas/Discounts';
import Shopping from './Paginas/Shopping';
import User from './Paginas/User';
import Cad from './Paginas/Cad';

const Drawer = createDrawerNavigator();

function Route() {
  return(
    <Drawer.Navigator>
      <Drawer.Screen
        name='Home'
        icon='../assets/g2993.png'
        component={Home}
        options = {{
          title: 'Inicio'
        }}
      />
      <Drawer.Screen
        name='Search'
        component={Search}
        options={{
          title:'Buscar'
        }}
      /> 
      <Drawer.Screen
        name='Discounts'
        component={Discounts}
        options={{
          title:'Descontos',
        }}
      />    
       <Drawer.Screen
        name='Shopping'
        component={Shopping}
        options={{
          title:'Minhas compras',
      
        }}
      />    
       <Drawer.Screen
        name='User'
        component={User}
        options={{
          title:'Minha conta'
        }}
      />  
      <Drawer.Screen
        name='Cad'
        component={Cad}
        options={{
          title:'Cadastro'
        }}
      /> 
    </Drawer.Navigator>
  );
}

export default Route;
