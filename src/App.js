import MorePage from './pages/MorePage';
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoPage from './pages/TodoPage';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="home">
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="main" component={MainPage} />
        <Stack.Screen name="todo" component={TodoPage} />
        <Stack.Screen name="more" component={MorePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
