import React from 'react';
import {View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {blue, gray} from '../css/color';
import {TitleText, styles} from '../css/css';

const CirclePercentage = ({percentage, radius, strokeWidth}) => {
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg height={radius * 2} width={radius * 2}>
        <Circle
          stroke={gray.G2}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={blue.B4}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90, ${radius}, ${radius})`}
        />
      </Svg>
      <View style={styles.textContainer}>
        <TitleText>{`${percentage}%`}</TitleText>
      </View>
    </View>
  );
};

export default CirclePercentage;
