import { createAppContainer, createStackNavigator } from 'react-navigation'

import Challenge from '../Screens/Challenge'
import SearchScreen from '../Screens/Challenge'

const mainNavi = createStackNavigator({
  Challenge,
  SearchScreen
}, {
  initialRouteName: 'Challenge'
})

export default createAppContainer(mainNavi)