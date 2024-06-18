// NavigationButtons.js
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RowView} from '../css/css';

const NavigationButtons = () => {
  const navigation = useNavigation();

  return (
    <RowView style={{justifyContent: 'space-evenly'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('home');
        }}>
        <Text>Go to home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('main');
        }}>
        <Text>Go to main</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('plus');
          console.log('plus');
        }}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('user');
        }}>
        <Text>Go to User</Text>
      </TouchableOpacity>
    </RowView>
  );
};

export default NavigationButtons;
