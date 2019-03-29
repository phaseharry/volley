import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { initialLoad } from '../Store/Reducers/Players'
import fakeData from '../Utility/fakeData'

//Shows a list of the users' current matches
//has the ability to add a new match
class Challenge extends React.Component{
  static navigationOptions = {
    title: 'Challenge',
  }
  componentDidMount(){
    return this.props.loadChallenges(fakeData)
  }
  keyExtractor = item => `${item.id}` //used for FlatList key values (turns the id which is a Number type in a String to remove error)
  render(){
    const { challenging } = this.props
    return (
      <View>
        <FlatList
          data={challenging}
          keyExtractor={this.keyExtractor}
          renderItem={
            ({item}) => <Text key={item.id}>{`${item.firstName} ${item.lastName}`}</Text>
          }
        >
        </FlatList>
      </View>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    challenging: state.players.filter(player => player.challenging)   //filters out all the players we're currently challenging
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadChallenges: users => dispatch(initialLoad(users))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge)