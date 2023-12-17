import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Screen/Home';
import NavBOT from './Components/Home/NavBOT';
import Login from './Components/Login';
import Cart from './Components/Screen/Cart';
import Register from './Components/Register';
import Forgot from './Components/Forgot';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NavBOT" component={NavBOT} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}