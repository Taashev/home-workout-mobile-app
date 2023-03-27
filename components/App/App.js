import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { WebView } from 'react-native-webview';
import remoteConfig from '@react-native-firebase/remote-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isEmulator, getBrand } from 'react-native-device-info';

import { MainScreen } from '../../screens/MainScreen';
import { BackScreen } from '../../screens/BackScreen';
import { ChestScreen } from '../../screens/ChestScreen';
import { ArmsScreen } from '../../screens/ArmsScreen';
import { PressScreen } from '../../screens/PressScreen';
import { LegsScreen } from '../../screens/LegsScreen';

const Stack = createNativeStackNavigator();

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [url, setUrl] = useState('');

  async function f() {
    try {
      const getUrlLocation = await AsyncStorage.getItem('url');

      if (getUrlLocation) {
        const isConnected = (await NetInfo.fetch()).isConnected;
        setIsConnected(isConnected);
        isConnected && setUrl(getUrlLocation);
        setIsLoading(false);
        return;
      }
    } catch (err) {
      console.log(err);
    }

    try {
      await remoteConfig().setDefaults({ url: '' });
      await remoteConfig().fetch(0);
      await remoteConfig().fetchAndActivate();

      const getUrl = remoteConfig().getString('url');
      const emulator = await isEmulator();
      const brand = getBrand();

      if (getUrl && !emulator && brand !== 'google') {
        await AsyncStorage.setItem('url', getUrl);
        setUrl(getUrl);
      }

      setIsConnected(true);
    } catch (err) {
      console.log(err);
      setIsConnected(false);
    }
  }

  useEffect(() => {
    f().finally(() => setIsLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={require('../../assets/images/icon.png')} />
        </View>
      ) : !isConnected ? (
        <View
          style={{
            height: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            No internet connection
          </Text>
        </View>
      ) : url ? (
        <WebView source={{ uri: url }} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{ title: 'Главная' }}
            />
            <Stack.Screen
              name="Back"
              component={BackScreen}
              options={{ title: 'Спина' }}
            />
            <Stack.Screen
              name="Chest"
              component={ChestScreen}
              options={{ title: 'Грудь' }}
            />
            <Stack.Screen
              name="Arms"
              component={ArmsScreen}
              options={{ title: 'Руки' }}
            />
            <Stack.Screen
              name="Press"
              component={PressScreen}
              options={{ title: 'Пресс' }}
            />
            <Stack.Screen
              name="Legs"
              component={LegsScreen}
              options={{ title: 'Ноги' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
