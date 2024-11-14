/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Provider, useSelector} from 'react-redux';
import {persistor, store} from './redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Federated} from '@callstack/repack/client';

const MiniAppScreen = React.lazy(() =>
  Federated.importModule('mini', './miniApp'),
);

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'red',
  };

  const {isAuthorized} = useSelector(state => state.common);

  useEffect(() => {
    console.log('isAuthorized', isAuthorized);
  }, [isAuthorized]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={backgroundStyle}>
          <Text>isAuthorized: {isAuthorized}</Text>
          <MiniAppScreen />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
