// In App.js in a new project

import { View, Text } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// components
import Home from './components/home';
import POE from './components/poe';
import OV from './components/ov';
import CD from './components/cd';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WFWorldstate" component={Home} />
        <Stack.Screen name="Plains of Eidelon" component={POE} />
        <Stack.Screen name="Orb Vallis" component={OV} />
        <Stack.Screen name="Cambion Drift" component={CD} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;