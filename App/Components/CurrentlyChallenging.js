import React from 'react'
import { View, Text, SectionList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { sortAlphabetically, sortChallenges } from '../Utility/utilityfncs'

import styles from '../Styles/UserListStyles'


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

  renderHeader = title => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.sectionText}>{title}</Text>
      </View>
    )
  }

  render(){
    const { challenging } = this.props
    return (
      <SectionList
        sections={[
          { title: 'Friends',
            data: challenging
          }
        ]}
        renderSectionHeader={({ section }) => this.renderHeader(section.title)}
        renderItem={({item}) => this.userItemRenderer(item)} 
        keyExtractor={item => `${item.id}`}
      />  
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