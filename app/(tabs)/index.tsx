import { Image, StyleSheet, Platform, View, Text, ViewComponent, SafeAreaView, Dimensions } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <SafeAreaView>
    <View style={css.normalContainer}>
    <Image source={require('../../assets/images/codpoints.png')}
    style={css.reactLogo}></Image>
    <Text style={[css.h1, css.textCenter]}>Codpoints</Text>
    <Text style={[css.textCenter, textColor('grey')]}>Hello World! Nama saya Kaiser Madyan Arashy dari kelas XI RPL 2 blahblablha</Text>
    </View>
   </SafeAreaView>
   
  );
}

const css = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  normalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12
  },
  h1: { 
    fontSize: 24,
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
  
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: 12,
    marginBottom: 12,
    objectFit:'cover',
    backgroundPosition: 'left',
  },
});

const textColor = (color: string) => ({
  color: color || '#0000', // Jika tidak diberikan warna, maka jadi hitam
});

const bgColor = (color: string) => ({
  backgroundColor: color || '#0000', // Jika tidak diberikan warna, maka jadi hitam
});