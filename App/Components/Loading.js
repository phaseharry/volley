import React from 'react'
import { View, Animated } from 'react-native'

import VolleyIMG from '../Assets/volley.png'
import styles from '../Styles/VolleyImg'

class Loading extends React.Component{
  state = {
    opacity: new Animated.Value(0)
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }

  render(){
    return (
      <View style={styles.container}>
        <Animated.Image 
          onLoad={this.onLoad} 
          style={[styles.pic, {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1]
                })
              }
            ]
          }]} 
          source={VolleyIMG}
        />
      </View>
    )
  }
}

export default Loading