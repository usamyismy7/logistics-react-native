import React, { useContext } from 'react';
import { UserDataContext } from './Components/Context';
import ContextProvider from './Components/Context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import Track from './Components/Track';
import Send from './Components/Send';
import Main from './Components/Authorization/Main';
import Login from './Components/Authorization/Login';
import Signup from './Components/Authorization/Signup';
import TrackDetail from './Components/TrackDetail';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const obj = useContext(UserDataContext);
  const info = obj.tracks;
  return(
  <ContextProvider>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} initialParams={{list: info}} />
        <Drawer.Screen name="Track" component={Track} initialParams={{list: info}} />
        <Drawer.Screen name="Send" component={Send} initialParams={{list: info}} />
        <Drawer.Screen name="TrackDetail" component={TrackDetail} initialParams={{list: info}} />
        <Drawer.Screen name="Main" component={Main} initialParams={{list: info}} />
        <Drawer.Screen name="Signup" component={Signup} initialParams={{list: info}} />
        <Drawer.Screen name="Login" component={Login} initialParams={{list: info}} />
      </Drawer.Navigator>
    </NavigationContainer>
  </ContextProvider>
  )
}

export function Stacks() {
  <ContextProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Track" component={Track} />
        <Stack.Screen name="Send" component={Send} />
        <Stack.Screen name="TrackDetail" component={TrackDetail} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  </ContextProvider>
}