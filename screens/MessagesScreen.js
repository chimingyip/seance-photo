import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Messages } from '../constants/Messages'

class MessagesScreen extends React.Component {
  onPress = (name) => {
    this.props.navigation.navigate('Chat', {title: name});
  }
  
  render() {
    return (
      <SafeAreaView>
        <ScrollView style={styles.padding}>
          {Messages.map((user, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: user.pic, size: 'large' }}
              title={user.title}
              titleStyle={styles.title}
              subtitle={user.message}
              subtitleStyle={styles.subtitle}
              chevron
              onPress={()=>this.onPress(user.title)}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#3F3F3F',
  },
  subtitle: {
    color: '#A5A5A5',
  },
  padding: {
    paddingTop: 20,
    paddingBottom: 150,
  }
})

export default MessagesScreen;
