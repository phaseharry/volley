import { createAppContainer, createStackNavigator } from 'react-navigation'

import Challenge from '../Screens/Challenge'

const mainNavi = createStackNavigator({
  Challenge,
}, {
  initialRouteName: 'Challenge'
})

export default createAppContainer(mainNavi)