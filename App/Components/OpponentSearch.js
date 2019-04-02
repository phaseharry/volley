import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { sortAlphabetically, userSearch } from '../Utility/utilityfncs'

const styles = StyleSheet.create({
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
  textContainer: {
    paddingLeft: 10,
    paddingTop: 7
  },
  textStyle: {
    fontSize: 15
  }
})

class OpponentSearch extends React.Component{

  userItemRenderer = item => { //used to render each user's item (avatar icon and name)
    const { battleUser } = this.props
    return (
      <TouchableOpacity onPress={() => battleUser(item.id)}>
        <View style={styles.userItem}>
          <Image style={styles.avatarIcon} source={{ uri: `${item.avatar}` }}/>
          <View style={styles.textContainer}>
            <Text key={item.id}>{`${item.firstName} ${item.lastName}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render(){
    const { potentialOpponents } = this.props
    return (
        <FlatList
          data={potentialOpponents}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => this.userItemRenderer(item)}
        >
        </FlatList>
    )
  }
}

//redux mapping into component
const mapStateToProps = ({search, players}) => {
  return {
    potentialOpponents: sortAlphabetically(userSearch(search, players)) //userSearch is passed in our search string and players to filter out and passed into to sortAlphabetically to sort through the queried users
  }
}

export default connect(mapStateToProps, null)(OpponentSearch)