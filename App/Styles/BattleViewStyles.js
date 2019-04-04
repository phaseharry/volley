import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const BattleViewStyles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#99ccff'
  },
  img: {
    width: height * 0.5,
    height: width * 0.5,
    alignSelf: 'center'
  },
  textContainer: {
    alignSelf: 'center'
  }
})

export default BattleViewStyles