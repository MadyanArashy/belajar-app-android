import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface EnkapsulasiTombolProps {
  initialText: string;
  initialColor: string;
  initialTextColor: string;
  style?: ViewStyle;
};

const EnkapsulasiTombol = ({ initialText, initialColor, initialTextColor, style }: EnkapsulasiTombolProps) => {
  const [buttonColor, setButtonColor] = useState(initialColor);
  const [buttonTextColor, setButtonTextColor] = useState(initialTextColor);
  const [buttonText, setButtonText] = useState(initialText);

  const changeButton = () => {
    setButtonColor(prevColor => prevColor === initialColor ? 'red' : initialColor);
    setButtonTextColor(prevColor => prevColor === initialTextColor ? 'white' : initialTextColor);
    setButtonText('mama aku takut');
  }

  return (
    <TouchableOpacity
      style={[{ backgroundColor: buttonColor, padding: 10 }, style]}
      onPress={changeButton}
    >
      <Text style={{ color: buttonTextColor }}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default EnkapsulasiTombol;
