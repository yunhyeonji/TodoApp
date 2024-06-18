import {ThemeProvider} from 'styled-components';
import {black, gray, white} from '../css/color';
import {BaseText, ColumnView, ListBox, RowView, TitleText} from '../css/css';
import {ScrollView, Text} from 'react-native';

const ListPart = () => {
  return (
    <ThemeProvider theme={{gray, white, black}}>
      <ScrollView>
        <RowView>
          <TitleText>12:00 - </TitleText>
          <ListBox>
            <ColumnView>
              <TitleText>할 일 제목</TitleText>
              <BaseText>어쩌구 저쩌구 샤랄랄라~</BaseText>
            </ColumnView>
          </ListBox>
        </RowView>
        <RowView>
          <TitleText>12:00 - </TitleText>
          <ListBox>
            <ColumnView style={{flex: 6}}>
              <TitleText>할 일 제목</TitleText>
              <BaseText>어쩌구 저쩌구 샤랄랄라~</BaseText>
            </ColumnView>
            <BaseText style={{flex: 1}}>icon</BaseText>
          </ListBox>
        </RowView>
        <RowView>
          <TitleText>12:00 - </TitleText>
          <ListBox>
            <ColumnView style={{flex: 6}}>
              <TitleText>할 일 제목</TitleText>
              <BaseText>어쩌구 저쩌구 샤랄랄라~</BaseText>
            </ColumnView>
            <BaseText style={{flex: 1}}>icon</BaseText>
          </ListBox>
        </RowView>
      </ScrollView>
    </ThemeProvider>
  );
};

export default ListPart;
