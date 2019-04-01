import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'

import VolleyImg from '../Assets/volley.png'

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignSelf: 'center'
  }
})

class BattleView extends React.Component{ //will add custom navigation back button on top left corner

  static navigationOptions = {
    header: null
  }

  render(){
    return (
      <View style={styles.imgContainer}>
        <Image source={VolleyImg} style={styles.img}/>
      </View>
    )  
  }
}

export default BattleView