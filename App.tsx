

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import Home from './Home';
import Asteroid from './Asteroid'
import Random from './Random';


export interface Stack{
  name: string;
  navigation: StackNavigationProp<any>;
  route: RouteProp<any>;
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Home' }} component={Home} />
        <Stack.Screen name="Asteroid" options={{ title: 'Asteroid' }} component={Asteroid} />
        <Stack.Screen name="Random" options={{ title: 'Random' }} component={Random} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;