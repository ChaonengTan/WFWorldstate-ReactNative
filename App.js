// In App.js in a new project

import { View, Text } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// components
import Home from './components/home';
import POE from './components/poe';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="POE" component={POE} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;