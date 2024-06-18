import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RowView} from '../css/css';
import Icon from 'react-native-vector-icons/AntDesign';
import {gray} from '../css/color';

const NavigationButtons = () => {
  const navigation = useNavigation();

  return (
    <RowView style={{marginHorizontal: 10, justifyContent: 'space-between'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('home');
        }}>
        <Icon name="home" size={32} color={gray.G9} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('main');
        }}>
        <Icon name="calendar" size={32} color={gray.G9} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('plus');
          console.log('plus');
        }}>
        <Icon name="pluscircleo" size={32} color={gray.G9} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('user');
        }}>
        <Icon name="setting" size={32} color={gray.G9} />
      </TouchableOpacity>
    </RowView>
  );
};

export default NavigationButtons;
