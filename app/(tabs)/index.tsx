import React from 'react'; // Import useRef
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

import { Entypo, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`flex flex-col justify-center items-center mb-10`}>
          <ImageBackground source={require('../../assets/images/fullbody-man.jpg')} style={tw`w-101 h-300 bg-cover mx-auto`}>
            <View
              style={tw`mt-90 bg-yellow-300 px-6 py-12 rounded-t-3xl mr-2 flex flex-col gap-6 h-full`}
            >
              <View>
                <Text style={tw`text-5xl font-extrabold tracking-wide`}>
                  Madyan{"\n"}Arashy
                </Text>
                <View style={tw`flex-row mr-1 gap-5 items-center`}>
                  <Text style={tw`text-xl font-semibold`}>
                    Programmer
                  </Text>
                  <Text style={tw`text-lg`}>
                    <Entypo name={'location-pin'} size={12}></Entypo>Kota Bogor
                  </Text>
                </View>
              </View>

              <View style={tw`flex-row mr-1 justify-between`}>
                <View style={tw`flex-col items-center`}>
                  <Text style={tw`font-bold text-4xl`}>
                    420
                  </Text>
                  <Text>
                    Following
                  </Text>
                </View>
                <View style={tw`flex-col items-center`}>
                  <Text style={tw`font-bold text-4xl`}>
                    97K
                  </Text>
                  <Text>
                    Followers
                  </Text>
                </View>
                <View style={tw`flex-col items-center`}>
                  <Text style={tw`font-bold text-4xl`}>
                    129K
                  </Text>
                  <Text>
                    Likes
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={tw`bg-black w-24 py-3 rounded rounded-lg`}>
                <Text style={tw`text-white text-center align-middle`}>
                  Hire Me
                </Text>
              </TouchableOpacity>

              <View style={tw`flex-row items-center w-100 gap-5`}>
                <View>
                  <FontAwesome name="facebook" size={24} />
                </View>

                <View>
                  <FontAwesome name="linkedin" size={24} />
                </View>

                <View>
                  <FontAwesome name="twitter" size={24} />
                </View>
              </View>

              <View>
                <View>
                  <Text style={tw`text-2xl font-extrabold mb-1 w-full`}>ABOUT ME</Text>
                  <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae corporis veniam iure vel quaerat nostrum sunt voluptas facere saepe sit! Fugit nulla ipsam magnam. Provident quo eveniet iure veritatis dolor?</Text>
                </View>
                <View style={tw`mt-5 w-full`}>
                  <Text style={tw`text-2xl font-extrabold mb-1`}>PROJECT</Text>
                  <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae corporis veniam iure vel quaerat nostrum sunt voluptas facere saepe sit! Fugit nulla ipsam magnam. Provident quo eveniet iure veritatis dolor?</Text>
                </View>
                <View style={tw`mt-5`}>
                  <Text style={tw`text-2xl font-extrabold mb-2`}>TOOLS</Text>
                  <View style={tw`flex-col items-start w-full gap-5 justify-between`}>
                    <Text>Visual Studio Code</Text>
                    <Text>Android Studio</Text>
                    <Text>Figma</Text>
                  </View>
                </View>
              </View>

            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 12,
  },
});
