import { useCallback, useEffect, useRef, useState } from 'react';
import { BackHandler } from 'react-native';
import WebView from 'react-native-webview';

export function WebViewScreen({ route }) {
  const [url, setUrl] = useState('');
  const [firstLoad, setFirstLoad] = useState(true);

  const webViewRef = useRef(null);

  const onLoadStart = (syntheticEvent) => {
    if (syntheticEvent.nativeEvent.canGoBack && firstLoad) {
      webViewRef.current.clearHistory();
      setFirstLoad(false);
    }
  };

  const onBackPress = useCallback(() => {
    webViewRef.current.goBack();
    return true;
  });

  useEffect(() => {
    setUrl(route.params.url);

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress
    );

    return () => subscription.remove();
  }, []);

  return (
    <WebView source={{ uri: url }} onLoadStart={onLoadStart} ref={webViewRef} />
  );
}
