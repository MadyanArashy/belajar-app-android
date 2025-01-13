import { Image, StyleSheet, Platform, View, Text, ViewComponent, SafeAreaView, Dimensions, TextInput, Button, ScrollView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Feather, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const primary500 = 'rgb(185, 26, 26)' // Warna utama

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
      {/* Hero View */}
      <View style={[container.hero, { backgroundColor: primary500 }]}>
        <View style={[flex.row, { gap: 10 }]}>
          <Image source={require('../../assets/images/codpoints.png')}
            style={[square(80), radius.circle]} />
          <View style={[flex.column]}>
            <Text style={[text.h1, { color: 'white', fontWeight: '700' }]}>
              Madyan Arashy
            </Text>
            <Text style={[text.h3, { color: 'white' }]}>
              Kopi Konco
            </Text>
          </View>
        </View>
      </View>

      {/* Statistik View Container */}
      <View style={[container.default, flex.column, { width: screenWidth }]}>
        <Text style={[text.h1, { fontWeight: 800, marginBottom: 16, color: primary500 }]}>
          Statistik
        </Text>
        {/* Wrapper Buletan & tulisan */}
        <View style={[flex.row, { justifyContent: 'space-between', maxWidth: (screenWidth - 30) }]}>
          {/* Barisan pertama */}
          <View style={[flex.column, { justifyContent: 'space-between', gap: 12 }]}>
            {/* Satu bulet + tulisan disampingnya */}
            <View style={[flex.row, { gap: 6 }]}>
              <View style={[{ padding: 12, backgroundColor: primary500 }, radius.circle]}>
                <Feather name="book-open" size={32} color={'white'} />
              </View>

              <View style={flex.column}>
                <Text style={[text.h1, { fontWeight: 900 }]}>
                  10
                </Text>
                <Text style={text.h3}>
                  Lessons
                </Text>
              </View>
            </View>
            {/* Satu bulet + tulisan disampingnya */}
            <View style={[flex.row, { gap: 6 }]}>
              <View style={[{ padding: 12, backgroundColor: primary500, alignSelf: 'center' }, radius.circle]}>
                <Feather name="sun" size={32} color={'white'}/>
              </View>
              <View style={flex.column}>
                <Text style={[text.h1, { fontWeight: 900 }]}>
                  20
                </Text>
                <Text style={text.h3}>
                  Streak
                </Text>
              </View>
            </View>
          </View>

          {/* Barisan kedua */}
          <View style={[flex.column, { justifyContent: 'space-between', gap: 12 }]}>
            {/* Satu bulet + tulisan disampingnya */}
            <View style={[flex.row, { gap: 6 }]}>
              {/* Buletan */}
              <View style={[{ padding: 12, backgroundColor: primary500, alignSelf: 'center' }, radius.circle]}>
                <MaterialCommunityIcons name="lightning-bolt" size={32} color={'white'}/>
              </View>
              {/* Dua Baris Teks */}
              <View style={flex.column}>
                <Text style={[text.h1, { fontWeight: 900 }]}>
                  30
                </Text>
                <Text style={text.h3}>
                  XP
                </Text>
              </View>
            </View>
            {/* Satu bulet + tulisan disampingnya */}
            <View style={[flex.row, { gap: 6 }]}>
              {/* Buletan */}
              <View style={[{ padding: 12, backgroundColor: primary500 }, radius.circle]}>
                <Feather name="target" size={32} color={'white'} />
              </View>
              {/* Dua baris teks */}
              <View style={flex.column}>
                <Text style={[text.h1, { fontWeight: 900 }]}>
                  40%                </Text>
                <Text style={text.h3}>
                  Akurasi
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Akun View Container */}
      <View style={[container.default]}>
        <Text style={[text.h1, { fontWeight: 800, marginBottom: 16, color: primary500 }]}>
          Akun
        </Text>
        <View style={[flex.column, { gap: 10 }]}>
          <View style={[flex.row, { justifyContent: 'space-between', maxWidth: (screenWidth - 40) }]}>
            <Text style={text.h2}>
              Detail Bisnis
            </Text>
            <Text style={text.h2}>
              &gt;
            </Text>
          </View>
          <View style={[flex.row, { justifyContent: 'space-between', maxWidth: (screenWidth - 40) }]}>
            <Text style={text.h2}>
              Ubah Kata Sandi
            </Text>
            <Text style={text.h2}>
              &gt;
            </Text>
          </View>
        </View>
      </View>
      
      {/* Tentang View Container */}
      <View style={[container.default]}>
        <Text style={[text.h1, { fontWeight: 800, marginBottom: 16, color: primary500 }]}>
          Tentang
        </Text>
        <View style={[flex.column, { gap: 10 }]}>
          <View style={[flex.row, { justifyContent: 'space-between', maxWidth: (screenWidth - 40) }]}>
            <Text style={text.h2}>
              Keuntungan Belajar di Saraya
            </Text>
            <Text style={text.h2}>
              &gt;
            </Text>
          </View>
          <View style={[flex.row, { justifyContent: 'space-between', maxWidth: (screenWidth - 40) }]}>
            <Text style={text.h2}>
              Syarat dan Ketentuan
            </Text>
            <Text style={text.h2}>
              &gt;
            </Text>
          </View>
          <View style={[flex.row, { justifyContent: 'space-between', maxWidth: (screenWidth - 40) }]}>
            <Text style={text.h2}>
              Kebijakan Privasi
            </Text>
            <Text style={text.h2}>
              &gt;
            </Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const container = StyleSheet.create({
  default: {
    marginVertical: 10,
    width: screenWidth,
    alignSelf: 'center',
    paddingHorizontal: 12,
  },
  hero: {
    paddingTop: 50,
    paddingBottom: 30,
    gap: 10,
    paddingHorizontal: 12,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  small: {
    width: screenWidth,
    alignSelf: 'center',
    paddingHorizontal: 48,
  }
})

const flex = StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column'
  },
  rowReverse: {
    flexDirection: 'row-reverse'
  },
  columnReverse: {
    flexDirection: 'column-reverse'
  }
})

const text = StyleSheet.create({
  h1: {
    fontSize: 20,
  },
  h2: {
    fontSize: 17,
  },
  h3: {
    fontSize: 15,
  },
  h4: {
    fontSize: 11,
  }
})

const radius = StyleSheet.create({
  circle: {
    borderRadius: 100
  },
  sm: {
    borderRadius: 20
  },
  md: {
    borderRadius: 40
  },
})

const square = (size: number) => ({
  width: size,
  height: size
})

const addFlex = (direction: string) => ({
  flex: 1
})

