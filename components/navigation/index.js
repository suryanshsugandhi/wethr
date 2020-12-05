import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen name="Home" component={Home} />
        <Stack.screen name="Splash" component={Splash} />
        <Stack.screen name="Settings" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
