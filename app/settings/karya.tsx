import React from 'react'; // Import useRef
import { Image, ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudentsScreen() {
 return (
  <SafeAreaView>
   <ScrollView>
    <View style={tw`flex-col items-center gap-6 mb-20`}>
     <Text style={tw`text-5xl text-center font-bold`}>Siswa RPL 2</Text>
     <View style={tw`flex-col px-4 gap-6`}>
      
     </View>
    </View>
   </ScrollView>
  </SafeAreaView>
 )
}