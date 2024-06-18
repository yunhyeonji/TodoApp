import styled from 'styled-components';
import {StyleSheet} from 'react-native';
import {gray, white, black} from './color';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: white.W2,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendar: {
    marginTop: 15,
    paddingBottom: 30,
    borderWidth: 1,
    borderColor: gray.G2,
    borderRadius: 20,
  },
  helloContainer: {
    padding: 10,
    marginTop: 10,
  },
  cancelContainer: {
    backgroundColor: gray.G1,
    color: gray.G6,
  },
});

/** 텍스트 관련 CSS */
export const Header = styled.Text`
  color: ${props => props.theme.black.B1};
  background-color: ${props => props.theme.blue.B4};
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: -10px;
  margin-horizontal: -10px;
  padding-vertical: 15px;
  padding-horizontal: 30%;
`;

export const Title = styled.Text`
  color: ${props => props.theme.black.B1};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const BaseText = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.black.B1};
`;

export const TitleText = styled(BaseText)`
  font-size: 20px;
  margin-vertical: 2px;
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

export const BlockBox = styled.View`
  border-color: ${props => props.theme.gray.G2};
  background-color: ${props => props.theme.white.W1};
  border-width: 1px;
  border-radius: 10px;
  padding: 10px;
  margin-horizontal: 3px;
  width: 47%;
`;

export const ListBox = styled(RowView)`
  flex: 1;
  background-color: ${props => props.theme.white.W1};
  border-color: ${props => props.theme.gray.G2};
  border-width: 1px;
  border-radius: 10px;
  padding: 18px 10px 20px 10px;
  margin-vertical: 4px;
`;

export const ListColumnView = styled(ColumnView)`
  flex: 6;
`;

export const DivideLine = styled.View`
  border-color: ${props => props.theme.gray.G4};
  border-width: 1px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
