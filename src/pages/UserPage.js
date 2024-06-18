import {SafeAreaView} from 'react-native-safe-area-context';
import {ColumnView, styles} from '../css/css';

const UserPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ColumnView></ColumnView>
    </SafeAreaView>
  );
};

export default UserPage;
