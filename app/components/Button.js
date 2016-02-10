'use strict';

import React, {
  Component,
  TouchableNativeFeedback,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150, 
    height: 100, 
    backgroundColor: 'red'
  },
  buttonText: {
  	margin: 30
  }
});

class Button extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		return (
	       <TouchableNativeFeedback onPress={this.props.onPress} background={TouchableNativeFeedback.SelectableBackground()}> 
		       <View style={styles.buttonContainer}> 
		       	  <Text style={styles.buttonText} >{ this.props.children }</Text> 
		       </View> 
	       </TouchableNativeFeedback>
    	);
	}
}
module.exports = Button;
