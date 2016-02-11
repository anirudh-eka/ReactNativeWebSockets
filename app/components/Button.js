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
        width: 100,
        backgroundColor: '#1abc9c',
        borderRadius: 5
    },
    buttonText: {
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10,
        color: "white"
    }
});

class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableNativeFeedback onPress={this.props.onPress}
                                     background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{ this.props.children }</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}
module.exports = Button;
