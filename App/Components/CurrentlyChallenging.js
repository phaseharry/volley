import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { sortAlphabetically, sortChallenges } from '../Utility/utilityfncs'

//Shows a list of the users' current matches
//has the ability to add a new match

//styles
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

class CurrentlyChallenging extends React.Component{

  userItemRenderer = item => { //used to render each user's item (avatar icon and name)
    const { battleUser } = this.props
    return (
      <TouchableOpacity onPress={() => battleUser(item.id)}>
        <View style={styles.userItem}>
          <Image style={styles.avatarIcon} source={{ uri: `${item.avatar}` }}/>
          <View style={styles.textContainer}>
            <Text key={item.id} style={styles.textStyle}>{`${item.firstName} ${item.lastName}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render(){
    const { challenging } = this.props
    return (
        <FlatList
          data={challenging}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => this.userItemRenderer(item)}
        >
        </FlatList>
    )
  }
}

//redux mapping into component
const mapStateToProps = state => {  
  return {
    challenging: sortAlphabetically(sortChallenges(state.players))
  }
}

export default connect(mapStateToProps, null)(CurrentlyChallenging)