import React from 'react'
import { Image, Dimensions, StyleSheet, View } from 'react-native'

import VolleyIMG from '../Assets/volley.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  pic: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    alignSelf: 'center',
  }
})

class Loading extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.pic} source={VolleyIMG}/>
      </View>
    )
  }
}

export default Loading