import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';
import RestoScreen from './screens/RestoScreen';

import MyReservationScreen from './screens/histoScreen';
import AccountScreen from './screens/AccountScreen';
import ReservationScreen from './screens/ReservationScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigatorTest = function() { // On sauvegarde une fonction StackNavigatorTest dans une const
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Resto" component={RestoScreen} />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
      </Stack.Navigator> 
  )
}

export default function App() {
  return (
    // <GestureHandlerRootView>

      <BottomSheetModalProvider>
        <NavigationContainer >
          <Tab.Navigator>
            <Tab.Screen name="Mon compte" component={AccountScreen} />
            <Tab.Screen name="Restaurant" component={StackNavigatorTest} />
            <Tab.Screen name="Mes réservations" component={MyReservationScreen} />
          </Tab.Navigator>
        </NavigationContainer>

      </BottomSheetModalProvider>
    // </GestureHandlerRootView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
