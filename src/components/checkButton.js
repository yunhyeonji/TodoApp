import {TouchableOpacity} from 'react-native';
import {BaseText, BlockBox, ColumnView, RowView, styles} from '../css/css';
import Icon from 'react-native-vector-icons/Entypo';
import {gray} from '../css/color';

export const CheckButton = ({type}) => {
  return (
    <BlockBox style={{width: '100%', marginBottom: 20}}>
      <RowView style={{justifyContent: 'space-between'}}>
        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <ColumnView style={styles.container}>
            <Icon name="check" size={32} color={gray.G8} style={{marginBottom: 7}} />
            <BaseText>할 일 완료</BaseText>
          </ColumnView>
        </TouchableOpacity>
        {type == 'add' ? (
          <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
            <ColumnView style={styles.container}>
              <Icon name="edit" size={32} color={gray.G8} style={{marginBottom: 7}} />
              <BaseText>저장</BaseText>
            </ColumnView>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
            <ColumnView style={styles.container}>
              <Icon name="edit" size={32} color={gray.G8} style={{marginBottom: 7}} />
              <BaseText>편집</BaseText>
            </ColumnView>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <ColumnView style={styles.container}>
            <Icon name="trash" size={32} color={gray.G8} style={{marginBottom: 7}} />
            <BaseText>삭제</BaseText>
          </ColumnView>
        </TouchableOpacity>
      </RowView>
    </BlockBox>
  );
};
