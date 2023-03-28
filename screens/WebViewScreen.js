import { useCallback, useEffect, useRef, useState } from 'react';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/core';
import WebView from 'react-native-webview';

export function WebViewScreen({ navigation, route }) {
  const [url, setUrl] = useState('');
  const webViewRef = useRef(null);

  useEffect(() => {
    setUrl(route.params.url);

    const onBackPress = () => {
      // webViewRef.current.goBack();

      return true;
    };

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress
    );

    return () => subscription.remove();
  }, []);

  function handler(newNavState) {
    console.log('newNavState', newNavState);
    console.log('----');
    console.log('webViewRef', webViewRef);
  }

  return (
    <WebView
      source={{ uri: url }}
      onNavigationStateChange={handler}
      ref={webViewRef}
    />
  );
}
