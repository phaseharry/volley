import React from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'

styles
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

class OpponentSearch extends React.Component{

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
    const { potentialOpponents } = this.props
    return (
      <View style={styles.mainContainer}>
        <Text>OpponentSearch</Text>
        <FlatList
          data={potentialOpponents}
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
const mapStateToProps = ({search, players}) => {
  const searchQuery = new RegExp(search, 'i')  
  return {
    potentialOpponents: players.filter(player => {                //filters out user based on search parameters and sorts through it by first name (definitely need to optimize)
      if(searchQuery.test(player.firstName) || searchQuery.test(player.lastName)){
        return true 
      } else {
        return false
      }
    }).sort((p1, p2) => {
      if(p1.firstName > p2.firstName){
        return 1
      } else if(p1.firstName < p2.firstName){
        return -1
      } else {
        return 0
      }
    })  
  }
}

export default connect(mapStateToProps, null)(OpponentSearch)