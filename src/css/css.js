import styled from 'styled-components';
import {StyleSheet} from 'react-native';
import {gray} from './color';

export const styles = StyleSheet.create({
  calendar: {
    marginHorizontal: 10,
    marginVertical: 15,
    paddingBottom: 30,
    borderWidth: 1,
    borderColor: gray.G2,
    borderRadius: 20,
  },
});

/** 텍스트 관련 CSS */
export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const BaseText = styled.Text`
  font-size: 14px;
  color: black;
`;

export const TitleText = styled(BaseText)`
  font-size: 20px;
`;

/** 뷰 관련 CSS */
export const RowView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ColumnView = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const ListBox = styled(RowView)`
  border-color: ${props => props.theme.gray.G2};
  border-width: 1px;
  border-radius: 10px;
  padding: 10px;
  margin-vertical: 3px;
  margin-horizontal: 10px;
  background-color: white;
`;
