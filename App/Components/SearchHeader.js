import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import { handleChange, resetSearch } from '../Store/Reducers/Search'
import { battleUser } from '../Store/Reducers/Players'
import { randomUser } from '../Utility/utilityfncs'

import styles from '../Styles/SearchStyles'

//potental icons: ios-flame ios-flash ios-nuclear ios-rocket

class SearchHeader extends React.Component{

  randomOpponentBattle = () => {
    const user = randomUser(this.props.players)
    return this.challengeUser(user.id)       //returning it just incase this might be asynchronous in the future
  }

  challengeUser = userId => {
    this.props.battleUser(userId) 
    this.props.navigation.navigate('BattleView', { 
      userId
    })
    this.props.resetSearch()
  }

  render(){
    const { search, handleChange } = this.props
    return (
      <View style={styles.headerContainer}>
        <View style={styles.searchBackground}>
          <View style={styles.searchContainer}>
            <Ionicons
              size={30}
              name='md-search'
              style={styles.searchIcon}
            />
            <TextInput 
              onChangeText={text => handleChange(text)} 
              value={search} 
              placeholder='Find a friend'
              placeholderTextColor='gray'
              style={styles.input}
            />
          </View>
        </View>
        <TouchableOpacity onPress={this.randomOpponentBattle} style={styles.randomContainer}>  
          <Ionicons
            name='ios-flash'
            size={30}
            style={styles.battleIcon}
          />
          <Text style={styles.randomText}>Random Opponent</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
/* View component used to wrap around the touchable opacity on line 94*/

const mapStateToProps = ({ search, players }) => {
  return {
    players,
    search  
  }
}

const mapDisatchToProps = dispatch => {
  return {
    handleChange: search => dispatch(handleChange(search)),
    battleUser: user => dispatch(battleUser(user)),
    resetSearch: () => dispatch(resetSearch())
  }
}

export default withNavigation(connect(mapStateToProps, mapDisatchToProps)(SearchHeader))