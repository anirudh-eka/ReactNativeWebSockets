/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';

var ChatView = require('./app/components/ChatView');

class ReactNativeWebSockets extends Component {
  render() {
    return (
      <ChatView/>
    );
  }
}


AppRegistry.registerComponent('ReactNativeWebSockets', () => ReactNativeWebSockets);
