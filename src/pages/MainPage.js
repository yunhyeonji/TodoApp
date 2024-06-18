import {SafeAreaView} from 'react-native-safe-area-context';
import dayjs from 'dayjs';
import React, {useState} from 'react';
import CalendarPart from '../components/CalendarPart';
import ListPart from '../components/ListPart';
import {DivideLine, styles} from '../css/css';
import NavigationButtons from '../components/navigationButton';
import {ThemeProvider} from 'styled-components';
import {gray, white} from '../css/color';

const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemeProvider theme={{gray, white}}>
        <CalendarPart selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <DivideLine />
        <ListPart />
        <NavigationButtons />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default MainPage;
