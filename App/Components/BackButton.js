import React from 'react'
import { StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    position: 'absolute',
    top: 20,
    left: 20
  }
})

class BackButton extends React.Component{
  
  goBack = () => this.props.navigation.goBack()
  
  render(){
    return (
      <Ionicons
        name='md-arrow-back'
        color='red'
        size={30}
        style={styles.button}
        onPress={() => this.goBack()}
      />
    )
  }
}

export default BackButton