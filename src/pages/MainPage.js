import {SafeAreaView, Text} from 'react-native';
import dayjs from 'dayjs';
import React, {useState} from 'react';
import CalendarPart from '../components/CalendarPart';
import ListPart from '../components/ListPart';
import {Title} from '../css/css';

const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
  return (
    <SafeAreaView>
      <Text>헤더부분</Text>
      <CalendarPart selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <ListPart />
    </SafeAreaView>
  );
};

export default MainPage;
