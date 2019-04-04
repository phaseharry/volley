import React from 'react'
import { View, Text, Image, TouchableOpacity, SectionList } from 'react-native'
import { connect } from 'react-redux'

import { sortAlphabetically, userSearch } from '../Utility/utilityfncs'

import styles from '../Styles/UserListStyles'


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

  renderHeader = title => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.sectionText}>{title}</Text>
      </View>
    )
  }

  render(){
    const { potentialOpponents } = this.props
    return (
        <SectionList
          sections={[
            { title: 'Opponents',
              data: potentialOpponents
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
const mapStateToProps = ({search, players}) => {
  return {
    potentialOpponents: sortAlphabetically(userSearch(search, players)) //userSearch is passed in our search string and players to filter out and passed into to sortAlphabetically to sort through the queried users
  }
}

export default connect(mapStateToProps, null)(OpponentSearch)