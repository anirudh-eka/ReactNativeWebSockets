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
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 15
    },
	messageInput: {
        margin:20
    }
});

class ChatView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "hello!"
        };
        this.ws = new WebSocket('ws://10.0.3.2:3000');
        this.send = () => {
        };
        this.ws.onopen = () => {
            this.ws.send("register:client");
            this.send = () => {
                this.ws.send(this.state.text);
                this.setState({text: ""})
            }
        };
        this.ws.onmessage = (e) => {
            this.setState({message: e.data});
        };
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Talk to me, please....
                </Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text: text})}/>
                <Button onPress={this.send}>Send</Button>
                <Text style={styles.messageInput}>{this.state.message}</Text>
            </View>
        );
    }
}
module.exports = ChatView;
