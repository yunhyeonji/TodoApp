import {SafeAreaView} from 'react-native-safe-area-context';
import {DivideLine, Header, Title, styles} from '../css/css';
import NavigationButtons from '../components/navigationButton';
import {ThemeProvider} from 'styled-components';
import {ScrollView, View} from 'react-native';
import {gray, black, white, blue} from '../css/color';

const MorePage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemeProvider theme={{gray, black, white, blue}}>
        <Header>To-do List</Header>
        <View style={styles.helloContainer}>
          <Title style={{textAlign: 'left'}}>Hello, Hyeonji!</Title>
          <DivideLine style={{width: '45%'}} />
        </View>
        <ScrollView></ScrollView>
        <NavigationButtons />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default MorePage;
