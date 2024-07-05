import {TextInput, TouchableOpacity, View} from 'react-native';
import {
  BaseText,
  BlockBox,
  DivideLine,
  DivideRowLine,
  RowView,
  TitleText,
  styles,
} from '../css/css';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {CheckButton} from './checkButton';

const TodoPart = ({type}) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);
  const [isTimeModalVisible, setIsTimeModalVisible] = useState(false);

  const formatDate = date => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}년 ${month}월 ${day}일`;
  };

  const formatTime = time => {
    return time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  };

  return (
    <>
      <BlockBox style={{flex: 4, width: '100%', marginBottom: 10}}>
        <View style={{flex: 1}}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Add a new task" />
          </View>
          <DivideLine />
          <BaseText>상세 정보 입력</BaseText>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.multi]}
              placeholder="Add a new task"
              multiline={true}
              numberOfLines={4}
            />
          </View>
        </View>
      </BlockBox>
      {/* 날짜 표현 부분 */}
      <BlockBox style={{flex: 3, width: '100%', marginBottom: 10}}>
        <BaseText>일정 선택</BaseText>
        <RowView style={[styles.container, {marginTop: 3}]}>
          <TouchableOpacity
            onPress={() => {
              setIsDateModalVisible(true);
            }}>
            <TitleText>{formatDate(date)}</TitleText>
          </TouchableOpacity>
          <DivideRowLine />
          <TouchableOpacity
            onPress={() => {
              setIsTimeModalVisible(true);
            }}>
            <TitleText>{formatTime(time)}</TitleText>
          </TouchableOpacity>
        </RowView>
        {isDateModalVisible && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || date;
              setIsDateModalVisible(false);
              setDate(currentDate);
            }}
          />
        )}
        {isTimeModalVisible && (
          <DatePicker
            modal
            open={isTimeModalVisible}
            date={time}
            mode="time"
            onConfirm={selectedTime => {
              setIsTimeModalVisible(false);
              setTime(selectedTime);
              console.log(date + selectedTime);
            }}
            onCancel={() => {
              setIsTimeModalVisible(false);
            }}
          />
        )}
      </BlockBox>
      <CheckButton type={type} />
    </>
  );
};

export default TodoPart;
