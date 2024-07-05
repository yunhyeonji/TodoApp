import {ThemeProvider} from 'styled-components';
import {black, blue, gray, white} from '../css/color';
import {ListBox, ListColumnView, TitleText, styles} from '../css/css';
import {ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const ListPart = () => {
  const navigation = useNavigation();

  const [isCancelled, setIsCancelled] = useState(true);
  const [done, setDone] = useState(false);

  return (
    <ThemeProvider theme={{gray, white, black}}>
      <ScrollView>
        <ListBox>
          <TitleText>12:30 - </TitleText>
          <ListColumnView>
            <TitleText>할 일 제목</TitleText>
          </ListColumnView>
          <Icon name="circle" size={32} color={blue.B3} />
        </ListBox>
        <ListBox style={styles.cancelContainer}>
          <TitleText style={styles.cancelContainer}>12:00 - </TitleText>
          <ListColumnView>
            <TitleText style={[styles.cancelContainer, {textDecorationLine: 'line-through'}]}>
              할 일 제목
            </TitleText>
          </ListColumnView>
          <Icon name="circle" size={32} color={gray.G4} />
        </ListBox>
        <ListBox>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              navigation.navigate('todo', {type: 'update'});
            }}>
            <TitleText>12:30 - </TitleText>
            <ListColumnView>
              <TitleText>할 일 제목</TitleText>
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
      </ScrollView>
    </ThemeProvider>
  );
};

export default ListPart;
