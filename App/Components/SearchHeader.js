import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import { handleChange, resetSearch } from '../Store/Reducers/Search'
import { battleUser } from '../Store/Reducers/Players'
import { randomUser } from '../Utility/utilityfncs'

//need to make a random opponent generator
//need to add an icon next to text input

//mayve navigate to the search view if the search has a value inside and pass this state down to that components search header
//use the navigation prop to get the title for the header based on the screen?
//food for thought
class SearchHeader extends React.Component{

  randomOpponentBattle = () => {
    const user = randomUser(this.props.players)
    console.log(user)
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
      <View>
        <TextInput 
          onChangeText={text => handleChange(text)} 
          value={search} 
          placeholder='Find a friend'
          placeholderTextColor='gray'
        />
        <TouchableOpacity onPress={this.randomOpponentBattle}>
          <Text>Random Opponent</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

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