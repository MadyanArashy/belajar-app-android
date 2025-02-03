import React from 'react'; // Import useRef
import { Image, ScrollView, Text, View, Dimensions } from 'react-native';
import tw from 'twrnc';

import { SafeAreaView } from 'react-native-safe-area-context';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function StudentsScreen() {
 return (
  <SafeAreaView>
   <ScrollView>
    <View style={tw`flex-col items-center gap-6 mb-20`}>
     <Text style={tw`text-5xl text-center font-bold`}>Siswa RPL 2</Text>
     <View style={tw`flex-col px-4 gap-6`}>
      <View style={tw`flex-row w-full justify-around`}>
        <View style={tw`flex-col items-center`}>
          <Image source={require('../../assets/images/robert-patinson.jpeg')} style={[tw`rounded-lg`, {width: (screenWidth * 0.4), height: (screenWidth * 0.4)}]}/>
          <Text style={tw`text-lg text-center font-bold`}>Maiden Arashy</Text>
        </View>
        <View style={tw`flex-col items-center`}>
          <Image source={require('../../assets/images/henry-cavill.jpg')} style={[tw`rounded-lg`, {width: (screenWidth * 0.4), height: (screenWidth * 0.4)}]}/>
          <Text style={tw`text-lg text-center font-bold`}>Fadhlan Putra Pamungih</Text>
        </View>
      </View>
      <View style={tw`flex-row w-full justify-around`}>
        <View style={tw`flex-col items-center`}>
          <Image source={require('../../assets/images/jmk48.jpg')} style={[tw`rounded-lg`, {width: (screenWidth * 0.4), height: (screenWidth * 0.4)}]}/>
          <Text style={tw`text-lg text-center font-bold`}>Ardhika Raditya Al{'\n'} Azizi Tumanggor</Text>
        </View>
        <View style={tw`flex-col items-center`}>
          <Image source={require('../../assets/images/john-cina.jpg')} style={[tw`rounded-lg`, {width: (screenWidth * 0.4), height: (screenWidth * 0.4)}]}/>
          <Text style={tw`text-lg text-center font-bold`}>Al Fathi Ainan</Text>
        </View>
      </View>
      <View style={tw`flex-row w-full justify-around`}>
        <View style={tw`flex-col items-center`}>
          <Image source={require('../../assets/images/music-meditate.jpg')} style={[tw`rounded-lg`, {width: (screenWidth * 0.4), height: (screenWidth * 0.4)}]}/>
          <Text style={tw`text-lg text-center font-bold`}>Rayhanah Mutiara</Text>
        </View>
        <View style={tw`flex-col items-center`}>
          <Image source={require('../../assets/images/music-meditate.jpg')} style={[tw`rounded-lg`, {width: (screenWidth * 0.4), height: (screenWidth * 0.4)}]}/>
          <Text style={tw`text-lg text-center font-bold`}>M. Althaaf Basi</Text>
        </View>
      </View>
      <View style={tw`flex-row w-full justify-around`}>
        <View style={tw`flex-col items-center`}>
          <Image source={require('../../assets/images/music-meditate.jpg')} style={[tw`rounded-lg`, {width: (screenWidth * 0.4), height: (screenWidth * 0.4)}]}/>
          <Text style={tw`text-lg text-center font-bold`}>Aufa fufufafa</Text>
        </View>
        <View style={tw`flex-col items-center`}>
          <Image source={require('../../assets/images/music-meditate.jpg')} style={[tw`rounded-lg`, {width: (screenWidth * 0.4), height: (screenWidth * 0.4)}]}/>
          <Text style={tw`text-lg text-center font-bold`}>Dayat</Text>
        </View>
      </View>
     </View>
    </View>
   </ScrollView>
  </SafeAreaView>
 )
}