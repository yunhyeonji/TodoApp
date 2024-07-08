import React, {useEffect, useState} from 'react';
import {BlockBox, DivideLine, Header, RowView, Title, TitleText, styles} from '../css/css';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListPart from '../components/ListPart';
import {ThemeProvider} from 'styled-components';
import {gray, white, black, blue} from '../css/color';
import NavigationButtons from '../components/navigationButton';
import CirclePercentage from '../components/CirclePart';
import {View} from 'react-native';
import {httpGetMethod} from '../RestAPIRequest';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    httpGetMethod({api: '/getList', data: {userSeq: 7}, setData, setLoading});
    httpGetMethod({api: '/selectPercentage', data: {userSeq: 7}, setPercentage, setLoading});
  }, [data]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemeProvider theme={{gray, black, white, blue}}>
        <Header>To-do List</Header>
        <View style={styles.helloContainer}>
          <Title style={{textAlign: 'left'}}>Hello, {data[0].userSeq}!</Title>
          <DivideLine style={{width: '45%'}} />
        </View>

        {/*  퍼센티지 확인하는 부분 */}
        <RowView style={{justifyContent: 'space-between'}}>
          <BlockBox>
            <TitleText>Today</TitleText>
            <CirclePercentage
              percentage={percentage.dailyPercentage}
              radius={50}
              strokeWidth={10}
            />
          </BlockBox>
          <BlockBox>
            <TitleText>This Month</TitleText>
            <CirclePercentage
              percentage={percentage.monthlyPercentage}
              radius={50}
              strokeWidth={10}
            />
          </BlockBox>
        </RowView>
        <DivideLine />

        {/* 오늘 할 일 리스트 */}
        <ListPart data={data} setData={setData} loading={loading} setLoading={setLoading} />
        {/* 화면이동 버튼 */}
        <NavigationButtons />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default HomePage;
