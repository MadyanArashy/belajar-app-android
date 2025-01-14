import React from 'react'; // Import useRef
import { Image, ScrollView, Text, View, Dimensions, ImageBackground } from 'react-native';
import tw from 'twrnc';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function StudentsScreen() {
 return (
  <SafeAreaView>
   <ScrollView>
    <View style={tw`flex-col items-center gap-6 mb-20`}>
     <Text style={tw`text-4xl text-center font-bold`}>Karya{'\n'}Terbaik RPL</Text>

     <Link style={tw`flex-col px-4 gap-6`} href="/settings/details">
      <ImageBackground source={require('../../assets/images/john-cina.jpg')} style={[tw`rounded-xl`, {width: (screenWidth * 0.9)}]}>
       <View style={tw`bg-opacity-30 bg-gray-950 pt-40 flex-col`}>
        <View style={tw`bg-gray-950 px-3 py-2 bg-opacity-60`}>
         <Text style={tw`font-bold text-2xl uppercase text-white`}>
          John Cina
         </Text>
         <Text style={tw`text-lg text-white`}>
          Website berbasis meme dengan tema John Cena dan Bing Chilling
         </Text>
        </View>
       </View>
      </ImageBackground>
     </Link>

     <Link style={tw`flex-col px-4 gap-6`} href="/settings/details">
      <ImageBackground source={require('../../assets/images/codpoints.png')} style={[tw`rounded-xl`, {width: (screenWidth * 0.9)}]}>
       <View style={tw`bg-opacity-30 bg-gray-950 pt-40 flex-col`}>
        <View style={tw`bg-gray-950 px-3 py-2 bg-opacity-60`}>
         <Text style={tw`font-bold text-2xl uppercase text-white`}>
          Cod Points
         </Text>
         <Text style={tw`text-lg text-white`}>
          Tutorial cara mendapatkan koin di Call of Duty: Warzone dengan cepat
         </Text>
        </View>
       </View>
      </ImageBackground>
     </Link>

     <Link style={tw`flex-col px-4 gap-6`} href="/settings/details">
      <ImageBackground source={require('../../assets/images/robert-patinson.jpeg')} style={[tw`rounded-xl`, {width: (screenWidth * 0.9)}]}>
       <View style={tw`bg-opacity-30 bg-gray-950 pt-40 flex-col`}>
        <View style={tw`bg-gray-950 px-3 py-2 bg-opacity-60`}>
         <Text style={tw`font-bold text-2xl uppercase text-white`}>
          Robert Pattinson
         </Text>
         <Text style={tw`text-lg text-white`}>
          Desain grafis selebriti Robbert Pattinson dan kariernya dalam acting
         </Text>
        </View>
       </View>
      </ImageBackground>
     </Link>

     <Link style={tw`flex-col px-4 gap-6`} href="/settings/details">
      <ImageBackground source={require('../../assets/images/john-cina.jpg')} style={[tw`rounded-xl`, {width: (screenWidth * 0.9)}]}>
       <View style={tw`bg-opacity-30 bg-gray-950 pt-40 flex-col`}>
        <View style={tw`bg-gray-950 px-3 py-2 bg-opacity-60`}>
         <Text style={tw`font-bold text-2xl uppercase text-white`}>
          John Cina
         </Text>
         <Text style={tw`text-lg text-white`}>
          Website berbasis meme dengan tema John Cena dan Bing Chilling
         </Text>
        </View>
       </View>
      </ImageBackground>
     </Link>
     
    </View>
   </ScrollView>
  </SafeAreaView>
 )
}