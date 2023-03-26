import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import remoteConfig from '@react-native-firebase/remote-config';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);
  const [url, setUrl] = useState('');

  useEffect(() => {
    remoteConfig()
      .setDefaults({url: ''})
      .then(() => remoteConfig().fetch(0))
      .then(() => remoteConfig().fetchAndActivate())
      .then(() => {
        const getUrl = remoteConfig().getString('url');
        // AsyncStorage.setItem('url', getUrl);
        setUrl(getUrl);
      })
      .catch(e => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView>
        <Text>{url}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
