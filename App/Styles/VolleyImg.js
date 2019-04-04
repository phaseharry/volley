import { Dimensions, StyleSheet } from 'react-native'

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

export default styles