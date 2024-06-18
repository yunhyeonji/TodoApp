import {ThemeProvider} from 'styled-components';
import {black, blue, gray, white} from '../css/color';
import {ListBox, ListColumnView, TitleText, styles} from '../css/css';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useState} from 'react';

const ListPart = () => {
  const [isCancelled, setIsCancelled] = useState(true);

  const cancelList = () => {
    return (
      <ListBox style={styles.cancelContainer}>
        <TitleText style={styles.cancelContainer}>12:00 - </TitleText>
        <ListColumnView>
          <TitleText style={[styles.cancelContainer, {textDecorationLine: 'line-through'}]}>
            할 일 제목
          </TitleText>
        </ListColumnView>
        <Icon name="circle" size={32} color={gray.G4} />
      </ListBox>
    );
  };
  const defaultList = () => {
    return (
      <>
        <ListBox>
          <TitleText>12:30 - </TitleText>
          <ListColumnView>
            <TitleText>할 일 제목</TitleText>
          </ListColumnView>
          <Icon name="circle" size={32} color={blue.B3} />
        </ListBox>
        <ListBox>
          <TitleText>12:30 - </TitleText>
          <ListColumnView>
            <TitleText>할 일 제목</TitleText>
          </ListColumnView>
          <Icon name="check-circle" size={32} color={blue.B3} />
        </ListBox>
      </>
    );
  };
  return (
    <ThemeProvider theme={{gray, white, black}}>
      <ScrollView>{isCancelled ? cancelList() : defaultList()}</ScrollView>
    </ThemeProvider>
  );
};

export default ListPart;
