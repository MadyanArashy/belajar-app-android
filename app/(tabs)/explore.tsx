import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function TabTwoScreen() {
  return (  // Add the return statement here
    <SafeAreaView>
      <ScrollView>
        <View style={tw`flex flex-col justify-center items-center mt-8 pt-8 gap-6`}>
          <View style={tw`flex flex-col justify-center items-center gap-6`}>
            <Image source={require('../../assets/images/fullbody-man.jpg')} style={tw`w-30 h-30 rounded-full`} resizeMode='cover'/>
            <View style={tw`flex flex-col text-center mx-auto`}>
              <Text style={tw`text-3xl font-bold text-center dark:text-white`}>Madyan Arashy</Text>
              <Text style={tw`text-lg font-medium text-gray-500 text-center`}>Fullstack Programmer | Daily</Text>
            </View>
            <View style={tw`flex flex-row gap-6`}>
              <AntDesign name='github' size={24} style={tw`bg-gray-200 p-3 rounded-xl`}/>
              <AntDesign name='linkedin-square' size={24} style={tw`bg-gray-200 p-3 rounded-xl`}/>
              <AntDesign name='instagram' size={24} style={tw`bg-gray-200 p-3 rounded-xl`}/>
              <AntDesign name='facebook-square' size={24} style={tw`bg-gray-200 p-3 rounded-xl`}/>
            </View>
          </View>
          <View style={tw`flex flex-row justify-between items-center px-6 gap-6`}>
            <View style={tw`flex flex-col text-center items-center`}>
              <Text style={tw`text-2xl font-bold`}>80</Text>
              <Text style={tw`text-md font-bold text-gray-500`}>Posts</Text>
            </View>
            <View style={tw`flex flex-col text-center items-center`}>
              <Text style={tw`text-2xl font-bold`}>110</Text>
              <Text style={tw`text-md font-bold text-gray-500`}>Followers</Text>
            </View>
            <View style={tw`flex flex-col text-center items-center`}>
              <Text style={tw`text-2xl font-bold`}>152</Text>
              <Text style={tw`text-md font-bold text-gray-500`}>Following</Text>
            </View>
          </View>
          <View style={tw`flex flex-row mx-auto gap-6`}>
            <TouchableOpacity style={tw`w-36 py-2 border border-blue-500 rounded-md`}>
              <Link style={tw`text-lg text-blue-500 text-center`} href="/settings/students">
                Siswa
              </Link>
            </TouchableOpacity>
            <TouchableOpacity style={tw`w-36 py-2 border border-gray-50 bg-blue-500 rounded-md`}>
              <Link style={tw`text-lg text-gray-50 text-center`} href={'/settings/karya'}>
                Kreasi
              </Link>
            </TouchableOpacity>
          </View>
          <View style={tw`flex flex-col gap-2`}>
            <View style={tw`flex-row justify-between w-full px-4 gap-2`}>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
            </View>
            <View style={tw`flex-row justify-between w-full px-4 gap-2`}>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
            </View>
            <View style={tw`flex-row justify-between w-full px-4 gap-2`}>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
            </View>
            <View style={tw`flex-row justify-between w-full px-4 gap-2`}>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
            </View>
            <View style={tw`flex-row justify-between w-full px-4 gap-2`}>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
            </View>
            <View style={tw`flex-row justify-between w-full px-4 gap-2`}>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
              <Image source={require('../../assets/images/sandhill-crane.jpg')} style={tw`w-30 h-30 border`} resizeMode='cover'/>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
