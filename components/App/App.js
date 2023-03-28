import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import remoteConfig from '@react-native-firebase/remote-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isEmulator, getBrand } from 'react-native-device-info';

import { WebViewScreen } from '../../screens/WebViewScreen';
import { MainScreen } from '../../screens/MainScreen';
import { BackScreen } from '../../screens/BackScreen';
import { BreastScreen } from '../../screens/BreastScreen';
import { HandsScreen } from '../../screens/HandsScreen';
import { AbsScreen } from '../../screens/AbsScreen';
import { LegsScreen } from '../../screens/LegsScreen';

const Stack = createNativeStackNavigator();

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [url, setUrl] = useState('');

  async function startApp() {
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

      // if (getUrl) {
      //   await AsyncStorage.setItem('url', getUrl);
      //   setUrl(getUrl);
      // }

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
    startApp().finally(() => setIsLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.loading}>
          <Image source={require('../../assets/images/icon.png')} />
        </View>
      ) : !isConnected ? (
        <View style={styles.connected}>
          <Text style={styles.connectedText}>No internet connection</Text>
        </View>
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={url ? WebViewScreen : MainScreen}
              options={{ title: 'Home' }}
              initialParams={{ url }}
            />
            <Stack.Screen
              name="Back"
              component={BackScreen}
              options={{ title: 'Back' }}
            />
            <Stack.Screen
              name="Breast"
              component={BreastScreen}
              options={{ title: 'Breast' }}
            />
            <Stack.Screen
              name="Hands"
              component={HandsScreen}
              options={{ title: 'Hands' }}
            />
            <Stack.Screen
              name="Abs"
              component={AbsScreen}
              options={{ title: 'Abs' }}
            />
            <Stack.Screen
              name="Legs"
              component={LegsScreen}
              options={{ title: 'Legs' }}
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
  loading: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  connected: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectedText: {
    fontSize: 20,
    fontWeight: 600,
    textTransform: 'uppercase',
  },
});
