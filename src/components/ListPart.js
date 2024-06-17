import {ThemeProvider} from 'styled-components';
import {gray} from '../css/color';
import {BaseText, ColumnView, ListBox, TitleText} from '../css/css';
import {Text} from 'react-native';

const ListPart = () => {
  return (
    <ThemeProvider theme={{gray}}>
      <ListBox>
        <ColumnView>
          <TitleText>할 일 제목</TitleText>
          <BaseText>어쩌구 저쩌구 샤랄랄라~</BaseText>
        </ColumnView>
      </ListBox>
      <ListBox>
        <ColumnView>
          <TitleText>할 일 제목</TitleText>
          <BaseText>어쩌구 저쩌구 샤랄랄라~</BaseText>
        </ColumnView>
      </ListBox>
    </ThemeProvider>
  );
};

export default ListPart;
