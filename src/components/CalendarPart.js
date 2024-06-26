import {Calendar} from 'react-native-calendars';
import React from 'react';
import {styles} from '../css/css';
import {blue, gray} from '../css/color';

const CalendarPart = ({selectedDate, setSelectedDate}) => {
  return (
    <Calendar
      style={styles.calendar}
      // 캘린더 내 스타일 수정
      theme={{
        todayTextColor: blue.B4,
        textDayFontSize: 20,
        textDayFontWeight: 'bold',
        textMonthFontSize: 20,
        textMonthFontWeight: 'bold',
        textSectionTitleColor: blue.B4,
      }}
      // 현재 날짜 설정
      current={selectedDate}
      // 오늘 날짜 마킹
      markedDates={{
        [selectedDate]: {selected: true, marked: true, selectedColor: blue.B2},
      }}
      // 날짜 클릭 시 그 날짜 출력
      onDayPress={day => {
        console.log(day);
        setSelectedDate(day.dateString);
      }}
      // 이전 달, 다음 달 날짜 숨기기
      hideExtraDays={true}
      // 달 포맷 지정
      monthFormat={'M월'}
      // 달이 바뀔 때 바뀐 달 출력
      onMonthChange={month => {
        console.log(month);
      }}
    />
  );
};

export default CalendarPart;
