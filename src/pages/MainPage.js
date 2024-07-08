import {SafeAreaView} from 'react-native-safe-area-context';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import CalendarPart from '../components/CalendarPart';
import ListPart from '../components/ListPart';
import {DivideLine, styles} from '../css/css';
import NavigationButtons from '../components/navigationButton';
import {ThemeProvider} from 'styled-components';
import {black, blue, gray, white} from '../css/color';
import {httpGetMethod} from '../RestAPIRequest';

const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    httpGetMethod({
      api: '/getList',
      data: {userSeq: 7, reminderTime: selectedDate},
      setData,
      setLoading,
    });
  }, [selectedDate]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemeProvider theme={{gray, white, blue, black}}>
        <CalendarPart selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <DivideLine />
        <ListPart data={data} setData={setData} loading={loading} setLoading={setLoading} />
        <NavigationButtons />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default MainPage;
