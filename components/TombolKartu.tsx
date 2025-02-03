import { StyleSheet, Text, View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

interface TombolKartuProps {
  title: string;
  desc: string;
  textButton: string;
  sourceImage: ImageSourcePropType;
}

const TombolKartu = ({ title, desc, textButton, sourceImage }: TombolKartuProps) => {
  return (
    <View style={{ padding: 10, borderRadius: 10, backgroundColor: 'white', borderWidth: 1 }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{desc}</Text>
      <Image source={ sourceImage }/>
      <TouchableOpacity style={{ padding: 6, borderRadius: 10, backgroundColor: 'tomato', }}>
        <Text style={{ color: 'white' }}>{textButton}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TombolKartu

const styles = StyleSheet.create({
  title: {
    fontWeight: '800',
    fontSize: 24,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    color: 'rgb(180, 180, 192)',
  }
})