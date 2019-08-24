import React from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-navigation';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../Fire';

class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('title')
    });

    state = {
        messages: [{
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },],
    };


    render() {
        console.log(this.user)
        return(
            <SafeAreaView>
                {/* <GiftedChat
                    messages={this.state.messages}
                    onSend={Fire.shared.send}
                    user={{
                        _id: 1,
                      }}
                /> */}<Text>hello</Text>
            </SafeAreaView>
        );
    }

    componentDidMount() {
        Fire.shared.on(message => 
            {
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))}
        );
    }

    componentWillUnmount() {
        Fire.shared.off();
    }

    get user() {
        return {
            name: this.props.navigation.state.params.name,
            _id: Fire.shared.uid,
        };
    }
}


// const styles = StyleSheet.create({

// })

export default ChatScreen;