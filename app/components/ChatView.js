'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

var Button = require('./Button');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
  	height: 40, 
  	borderColor: 'gray', 
  	borderWidth: 1,
  	margin: 15
  }
});

class ChatView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: "hello!"
		}
		this.ws = new WebSocket('ws://10.0.3.2:3000');
		this.send = () => {};
		this.ws.onopen = () => {  // connection opened
			this.send = () => {
				this.ws.send(this.state.text)
				this.setState({text: ""})
			}
		};
	}

	render(){

		return (
	      <View style={styles.container}>
	        <Text style={styles.welcome}>
	          Talk to me, please....
	        </Text>
	        <TextInput 
	         	style={styles.textInput} 
	         	value={this.state.text} 
	         	onChangeText={(text) => this.setState({text: text})} />
	        <Button onPress={this.send} >Send</Button>
	      </View>
    	);
	}
}
module.exports = ChatView;
