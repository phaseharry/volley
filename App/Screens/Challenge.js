import React from 'react'
import { connect } from 'react-redux'
import { Dimensions, StyleSheet, View } from 'react-native'

import { initialLoad, battleUser } from '../Store/Reducers/Players'
import { resetSearch } from '../Store/Reducers/Search'
import fakeData from '../Utility/fakeData'

import SearchHeader from '../Components/SearchHeader'
import CurrenlyChallenging from '../Components/CurrentlyChallenging'
import OpponentSearch from '../Components/OpponentSearch'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 3,
  },
  filler: {
    // height: 100,
    backgroundColor: 'skyblue'
  }
})

//Shows a list of the users' current matches
//has the ability to add a new match

class Challenge extends React.Component{

  static navigationOptions = {
    headerTitle: <SearchHeader/>, 
    headerStyle: {
      height: Dimensions.get('window').height * 0.14
    }
  }

  componentDidMount(){
    return this.props.loadChallenges(fakeData)  //loading our data into our redux store
  }

  isSearching = () => this.props.search? true : false   //checks if there's user input in the search bar. If there is then render the opponent search component else we just show players they're currently challenging

  challengeUser = userId => {
    this.props.battleUser(userId) //changes the state as well as make network call if this was hooked up to server, will be promise chain (do a loading animation)
    this.props.navigation.navigate('BattleView', { 
      userId
    })
    this.props.resetSearch()
  }
  
  render(){
    return (
      <View style={styles.mainContainer}>
        {this.isSearching()? <OpponentSearch battleUser={this.challengeUser}/> : <CurrenlyChallenging battleUser={this.challengeUser}/>}
        <View style={styles.filler}></View>
      </View>
    )
  }
}

//redux mapping into component
const mapStateToProps = ({ search }) => {
  return {
    search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadChallenges: users => dispatch(initialLoad(users)),
    battleUser: userId => dispatch(battleUser(userId)),
    resetSearch: () => dispatch(resetSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge)