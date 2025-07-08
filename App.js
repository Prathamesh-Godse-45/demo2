import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import User from './Screens/User';
import { NavigationContainer } from '@react-navigation/native';
import UserDetail from './Screens/UserDetail';
import EditUser from './Screens/EditUser';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="user" component={User} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
        <Stack.Screen name="EditUser" component={EditUser} options={{ title: 'Edit User' }} />
      </Stack.Navigator>
    </NavigationContainer>
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
