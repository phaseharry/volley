import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import { handleChange, resetSearch } from '../Store/Reducers/Search'
import { battleUser } from '../Store/Reducers/Players'
import { randomUser } from '../Utility/utilityfncs'

//potental icons: ios-flame ios-flash ios-nuclear ios-rocket

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
  }, 
  searchBackground: {
    height: 80,
    backgroundColor: '#4da6ff',
    justifyContent: 'center',
    paddingHorizontal: 5
  },  
  searchContainer: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 5 ,
    borderRadius: 10
  },
  searchIcon:{
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#3385ff'
  },
  input: {
    backgroundColor: '#fff',
    color: 'black',
    width: Dimensions.get('window').width * 0.8,
  },
  randomContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  battleIcon: {
    paddingLeft: 20,
    paddingRight: 15,
    color: 'yellow'
  },
  randomText: {
    fontSize: 13,
    fontWeight: 'bold'
  }
})

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