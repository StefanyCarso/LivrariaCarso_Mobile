import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import Route from  './Route';

export default function App() {
  return (
    <NavigationContainer>{/* Um comentário JSX. */}
      <StatusBar hidden={true}/>
      <Route/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});