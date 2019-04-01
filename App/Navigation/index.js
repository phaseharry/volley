import { createAppContainer, createStackNavigator } from 'react-navigation'

import Challenge from '../Screens/Challenge'
import BattleView from '../Screens/BattleView'

const mainNavi = createStackNavigator({
  Challenge,
  BattleView
}, {
  initialRouteName: 'Challenge'
})

export default createAppContainer(mainNavi)