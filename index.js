/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import {name as appName} from './app.json';

messaging().setBackgroundMessageHandler(async message => {
  console.log('background handler:', message);
});

AppRegistry.registerComponent(appName, () => App);
