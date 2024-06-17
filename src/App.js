import UserPage from './pages/UserPage';
import MainPage from './pages/MainPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="main">
        <Stack.Screen name="user" component={UserPage} />
        <Stack.Screen name="main" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
