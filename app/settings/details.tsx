import React from 'react'; // Import useRef
import { Image, ScrollView, Text, View, Dimensions, Button, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { SafeAreaView } from 'react-native-safe-area-context';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function StudentsScreen() {
 return (
  <SafeAreaView>
   <ScrollView>
    <View style={tw`flex-col items-center gap-6 mb-20`}>
     <Text style={tw`text-4xl text-center font-bold`}>Madyan Arashy</Text>
     <View style={tw`flex-col px-4`}>
      <Image source={require('../../assets/images/robert-patinson.jpeg')} style={[tw`rounded-[30px] border-4 border-gray-100`, {width: (screenWidth * 0.9), height: (screenWidth * 0.7)}]}/>
      <TouchableOpacity style={tw`px-3 py-2 bg-blue-400 w-25 rounded-full mx-auto top--6 mb--12 border border-4 border-gray-100 z-10`}>
       <Text style={tw`text-lg text-gray-100 text-center`}>
        Hire Me
       </Text>
      </TouchableOpacity>
      <View style={tw`flex-row rounded-[30px] border-4 border-gray-100 bg-slate-300 justify-around py-8`}>
       <View style={tw`flex-col-reverse items-center`}>
         <Text style={tw`font-bold text-2xl`}>
           420
         </Text>
         <Text>
           Following
         </Text>
       </View>
       <View style={tw`flex-col-reverse items-center`}>
         <Text style={tw`font-bold text-2xl`}>
           97K
         </Text>
         <Text>
           Followers
         </Text>
       </View>
       <View style={tw`flex-col-reverse items-center`}>
         <Text style={tw`font-bold text-2xl`}>
           129K
         </Text>
         <Text>
           Likes
         </Text>
       </View>
      </View>
      <TouchableOpacity style={tw`px-3 py-2 bg-slate-600 w-35 rounded-full mx-auto top--6 mb--12 border border-4 border-gray-100 z-10`}>
       <Text style={tw`text-lg text-gray-100 text-center`}>
        My Portfolio
       </Text>
      </TouchableOpacity>
      <View style={tw`flex-row rounded-[30px] border-4 border-gray-100 bg-slate-300 justify-around py-8 px-4`}>
       <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nesciunt tempore mollitia dolorum, veritatis ducimus rerum maxime ad quae sunt suscipit impedit, sit facilis laborum quas repellendus. Sequi, dicta modi.
       </Text>
      </View>
     </View>
    </View>
   </ScrollView>
  </SafeAreaView>
 )
}