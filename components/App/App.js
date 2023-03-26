import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

import {WebView} from 'react-native-webview';
import remoteConfig from '@react-native-firebase/remote-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NetInfo from '@react-native-community/netinfo';

import {Card} from '../Card/Card';

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
          <ScrollView>
            <Text style={styles.title}>Тренеровки</Text>
            <Text style={styles.subtitle}>ДОМА</Text>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Card} />
            </Stack.Navigator>
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
        )}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4b0be',
    padding: 10,
  },
  title: {
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center',
    paddingTop: 10,
  },
  subtitle: {
    marginTop: 5,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ff793f',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center',
  },
});
