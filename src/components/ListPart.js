import {ThemeProvider} from 'styled-components';
import {black, blue, gray, white} from '../css/color';
import {ListBox, ListColumnView, TitleText, styles} from '../css/css';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {httpPostMethod} from '../RestAPIRequest';

const ListPart = ({data, setData, loading, setLoading}) => {
  const navigation = useNavigation();

  if (loading) {
    return (
      <View style={styles.container}>
        <TitleText>Loading...</TitleText>
      </View>
    );
  }

  const completedFunc = item => {
    httpPostMethod({
      api: '/updateTodo',
      data: {userSeq: 7, id: item.id, completed: !item.completed},
      setLoading,
    }).then(() => {
      // 데이터의 상태를 업데이트합니다.
      const updatedData = data.map(todo =>
        todo.id === item.id ? {...todo, completed: !todo.completed} : todo,
      );
      setData(updatedData);
    });
  };

  // 삭제하지 않은 리스트
  const defaultList = (item, index) => (
    <ListBox key={index}>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => {
          navigation.navigate('todo', {type: 'update'});
        }}>
        <TitleText>{item.reminderTime} - </TitleText>
        <ListColumnView>
          <TitleText>{item.title}</TitleText>
        </ListColumnView>

        <TouchableOpacity
          onPress={() => {
            completedFunc(item);
          }}>
          {item.completed ? (
            <Icon name="check-circle" size={32} color={blue.B3} />
          ) : (
            <Icon name="circle" size={32} color={blue.B3} />
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    </ListBox>
  );

  // 삭제한 리스트
  const deletedList = (item, index) => (
    <ListBox key={index} style={styles.cancelContainer}>
      <TitleText style={styles.cancelContainer}>{item.reminderTime} - </TitleText>
      <ListColumnView>
        <TitleText style={[styles.cancelContainer, {textDecorationLine: 'line-through'}]}>
          {item.title}
        </TitleText>
      </ListColumnView>
      <Icon name="circle" size={32} color={gray.G4} />
    </ListBox>
  );

  // 일정이 없을 때
  const noTodo = () => {
    return (
      <ListBox style={styles.cancelContainer}>
        <ListColumnView>
          <TitleText>오늘의 일정이 없습니다.</TitleText>
        </ListColumnView>
      </ListBox>
    );
  };

  return (
    <ThemeProvider theme={{gray, white, black}}>
      <ScrollView>
        {data?.length > 0
          ? data.map((item, index) =>
              item.deleted ? deletedList(item, index) : defaultList(item, index),
            )
          : noTodo()}
      </ScrollView>
    </ThemeProvider>
  );
};

export default ListPart;
