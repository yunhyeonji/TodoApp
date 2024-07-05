import {ThemeProvider} from 'styled-components';
import {black, blue, gray, white} from '../css/color';
import {ListBox, ListColumnView, TitleText, styles} from '../css/css';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {httpGetMethod} from '../RestAPIRequest';

const ListPart = () => {
  const navigation = useNavigation();
  const [done, setDone] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    httpGetMethod({api: '/getList', data: {userSeq: 7}, setData, setLoading});
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <TitleText>Loading...</TitleText>
      </View>
    );
  }

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
            setDone(!done);
            // 완료 DB 상태 업데이트 함수
          }}>
          {done ? (
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
        {data.length > 0
          ? data.map((item, index) =>
              item.deleted ? deletedList(item, index) : defaultList(item, index),
            )
          : noTodo()}
      </ScrollView>
    </ThemeProvider>
  );
};

export default ListPart;
