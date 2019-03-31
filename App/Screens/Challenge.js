import React from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'

import { initialLoad } from '../Store/Reducers/Players'
import fakeData from '../Utility/fakeData'

import SearchHeader from '../Components/SearchHeader'

//Shows a list of the users' current matches
//has the ability to add a new match
//Note to self: shou

//styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  userItem: {
    padding: 10,
    height: 44,
    flex: 1,
    flexDirection: 'row',
    // justifyContent: ''
  },
  avatarIcon: {
    width: 40,
    height: 40,
    borderRadius: 40/2,
  },
  textStyle: {
    fontSize: 18,
  }
})

class Challenge extends React.Component{
  static navigationOptions = {
    headerTitle: <SearchHeader />
  }

  componentDidMount(){
    return this.props.loadChallenges(fakeData)  //loading our data into our redux store
  }

  keyExtractor = item => `${item.id}` //used for FlatList key values (turns the id which is a Number type in a String to remove error)

  userItemRenderer = item => { //used to render each user's item (avatar icon and name)
    return (
      <View style={styles.userItem}>
        <Image style={styles.avatarIcon} source={{ uri: `${item.avatar}` }}/>
        <Text key={item.id}>{`${item.firstName} ${item.lastName}`}</Text>
      </View>
    )
  }

  render(){
    const { challenging } = this.props
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={challenging}
          keyExtractor={this.keyExtractor}
          renderItem={({item}) => this.userItemRenderer(item)
          }
        >
        </FlatList>
      </View>
    )
  }
}



//redux mapping into component
const mapStateToProps = state => {  
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