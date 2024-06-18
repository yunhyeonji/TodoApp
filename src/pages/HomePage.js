import React from 'react';
import {BlockBox, DivideLine, Header, RowView, Title, TitleText, styles} from '../css/css';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListPart from '../components/ListPart';
import {ThemeProvider} from 'styled-components';
import {gray, white, black, blue} from '../css/color';
import NavigationButtons from '../components/navigationButton';
import CirclePercentage from '../components/CirclePart';
import {View} from 'react-native';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemeProvider theme={{gray, black, white, blue}}>
        <Header>To-do List</Header>
        <View style={styles.helloContainer}>
          <Title style={{textAlign: 'left'}}>Hello, Hyeonji!</Title>
          <DivideLine style={{width: '45%'}} />
        </View>

        {/*  퍼센티지 확인하는 부분 */}
        <RowView style={{justifyContent: 'space-between'}}>
          <BlockBox>
            <TitleText>Today</TitleText>
            <CirclePercentage percentage={75} radius={50} strokeWidth={10} />
          </BlockBox>
          <BlockBox>
            <TitleText>This Month</TitleText>
            <CirclePercentage percentage={75} radius={50} strokeWidth={10} />
          </BlockBox>
        </RowView>
        <DivideLine />

        {/* 오늘 할 일 리스트 */}
        <ListPart />

        {/* 화면이동 버튼 */}
        <NavigationButtons />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default HomePage;
