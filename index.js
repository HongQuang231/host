/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ScriptManager, Federated, Script} from '@callstack/repack/client';

const containers = {
  mini: `http://localhost:9000/[name][ext]`,
};

const isProduct = false;
ScriptManager.shared.setMaxListeners(1000000000);
ScriptManager.shared.addResolver(async (scriptId, caller) => {
  const resolveURL = Federated.createURLResolver({
    containers,
  });

  let url;
  if (!isProduct) {
    if (__DEV__ && caller === 'main') {
      url = Script.getDevServerURL(scriptId);
    } else {
      url = resolveURL(scriptId, caller);
    }
    if (url) {
      return {
        url,
        cache: true,
        query: {
          platform: Platform.OS,
        },
        verifyScriptSignature: 'off',
      };
    }
  } else {
    if (caller === 'main') {
      url = Script.getDevServerURL(scriptId);
    } else {
      url = resolveURL(scriptId, caller);
    }

    if (url) {
      return {
        url,
        cache: true,
        query: {
          platform: Platform.OS,
        },
        verifyScriptSignature: 'strict',
      };
    }
  }
});

AppRegistry.registerComponent(appName, () => App);
