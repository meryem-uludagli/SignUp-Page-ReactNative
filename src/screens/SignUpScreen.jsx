import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Animated, {FadeInUp, FadeInDown} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  input: {
    color: '#2c3e50', // Text color (optional)
  },
});

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="w-full h-full bg-white">
      <StatusBar barStyle="light-content" />
      <Image
        className="absolute w-full h-full"
        source={require('../../assets/images/three.jpg')}
      />

      <View className="flex justify-around w-full h-full pt-40 pb-10">
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-5xl font-bold tracking-wider text-black">
            SignUp
          </Animated.Text>
        </View>

        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput
              placeholder="Username"
              placeholderTextColor={'rgba(44, 62, 80, 1)'}
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(200).springify()}
            className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput
              placeholder="E-mail"
              placeholderTextColor={'rgba(44, 62, 80, 1)'}
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(400).springify()}
            className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput
              placeholder="Password"
              placeholderTextColor={'rgba(44, 62, 80, 1)'}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(600).springify()}
            className="w-full">
            <TouchableOpacity className="w-full p-3 mb-3 bg-sky-400 rounded-2xl">
              <Text className="text-2xl font-bold text-center text-black">
                SignUp
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(800).springify()}
            className="flex-row justify-center p-5">
            <Text>Alredady have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text className="text-sky-700">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
