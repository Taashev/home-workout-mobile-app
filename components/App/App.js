import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import {WebView} from 'react-native-webview';
import remoteConfig from '@react-native-firebase/remote-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainScreen} from '../../screens/MainScreen';
import {BackScreen} from '../../screens/BackScreen';
import {ChestScreen} from '../../screens/ChestScreen';
import {ArmsScreen} from '../../screens/ArmsScreen';
import {PressScreen} from '../../screens/PressScreen';
import {LegsScreen} from '../../screens/LegsScreen';

const Stack = createNativeStackNavigator();

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);
  const [url, setUrl] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('url')
      .then(url => {
        if (url) {
          NetInfo.fetch()
            .then(state => {
              const isConnected = state.isConnected;
              setIsConnected(isConnected);
              if (isConnected) {
                setUrl(url);
              }
            })
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false));
        } else {
          // remoteConfig()
          //   .setDefaults({url: ''})
          //   .then(() => remoteConfig().fetch(0))
          //   .then(() => remoteConfig().fetchAndActivate())
          //   .then(() => {
          //     const getUrl = remoteConfig().getString('url');
          //     AsyncStorage.setItem('url', getUrl);
          //     setUrl(getUrl);
          //   })
          //   .catch(e => console.log(e))
          //   .finally(() => setIsLoading(false));
        }
      })
      .catch(e => console.log(e));
    setIsLoading(false);
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : !isConnected ? (
          <Text>No internet connection</Text>
        ) : url ? (
          <WebView source={{uri: url}} />
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{title: 'Главная'}}
            />
            <Stack.Screen
              name="Back"
              component={BackScreen}
              options={{title: 'Спина'}}
            />
            <Stack.Screen
              name="Chest"
              component={ChestScreen}
              options={{title: 'Грудь'}}
            />
            <Stack.Screen
              name="Arms"
              component={ArmsScreen}
              options={{title: 'Руки'}}
            />
            <Stack.Screen
              name="Press"
              component={PressScreen}
              options={{title: 'Пресс'}}
            />
            <Stack.Screen
              name="Legs"
              component={LegsScreen}
              options={{title: 'Ноги'}}
            />
          </Stack.Navigator>
        )}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
