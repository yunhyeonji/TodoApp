import UserPage from './pages/UserPage';
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="home">
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="main" component={MainPage} />
        <Stack.Screen name="user" component={UserPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
