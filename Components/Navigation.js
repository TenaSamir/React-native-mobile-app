import {Button,SafeAreaView,Alert, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../Screens/LogInScreen';
import Register from '../Screens/RegisterScreen';
import car from '../Screens/CarouselCardItem';

import Home from '../Screens/Home';
const Stack = createNativeStackNavigator();

 const Navigation=()=> {
    return (
     <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='LogIn' component={LogIn}/>
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name='Home' component={Home}/>

        </Stack.Navigator>
     </NavigationContainer>
    );
  }

  
  export default Navigation;