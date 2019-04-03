import { createAppContainer, createStackNavigator } from 'react-navigation'

import StartUp from '../Screens/StartUp'
import Challenge from '../Screens/Challenge'
import BattleView from '../Screens/BattleView'


const mainNavi = createStackNavigator({
  StartUp,
  Challenge,
  BattleView
}, {
  initialRouteName: 'StartUp'
})

export default createAppContainer(mainNavi)