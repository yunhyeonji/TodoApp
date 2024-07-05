import {SafeAreaView} from 'react-native-safe-area-context';
import {DivideLine, Header, Title, styles} from '../css/css';
import NavigationButtons from '../components/navigationButton';
import {ThemeProvider} from 'styled-components';
import {View} from 'react-native';
import {gray, black, white, blue} from '../css/color';
import TodoPart from '../components/TodoPart';
import {useRoute} from '@react-navigation/native';

const TodoPage = () => {
  const {type} = useRoute().params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemeProvider theme={{gray, black, white, blue}}>
        <Header>To-do List</Header>
        <View style={styles.helloContainer}>
          <Title style={{textAlign: 'left'}}>add todoList!</Title>
          <DivideLine style={{width: '45%'}} />
        </View>
        <TodoPart type={type} />
        <NavigationButtons />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default TodoPage;
