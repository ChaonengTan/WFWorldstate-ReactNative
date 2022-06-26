// In App.js in a new project

import { View, Text, StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client'
import { client } from './functions/client';

// components
import Home from './components/home';
import POE from './components/poe';
import OV from './components/ov';
import CD from './components/cd';

const Stack = createStackNavigator();

export default function App() {
  const headerStyle = {
    headerStyle: {
      backgroundColor: styles.header.backgroundColor
    },
    headerTintColor: styles.header.headerTintColor
  }
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            ...headerStyle
          }}
        >
          <Stack.Screen name="WFWorldstate" component={Home} options={{
            title: 'WFWorldstate'
          }}/>
          <Stack.Screen name="POE" component={POE} options={{
            title: 'Plains of Eidelon'
          }}/>
          <Stack.Screen name="OV" component={OV} options={{
            title: 'Orb Vallis'
          }}/>
          <Stack.Screen name="CD" component={CD} options={{
            title: 'Cambion Drift'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    headerTintColor: '#fff'
  }
})
