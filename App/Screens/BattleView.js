import React from 'react'
import { View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

import BackButton from '../Components/BackButton'
import Loading from '../Components/Loading'

import { findUser } from '../Utility/utilityfncs'

import styles from '../Styles/BattleViewStyles'


class BattleView extends React.Component{ //will add custom navigation back button on top left corner
  constructor(props){
    super(props)
    this.state = {
      loading: false
    }
  }

  static navigationOptions = {
    header: null
  }

  componentDidMount(){
    this.setState({ 
      loading: true
    })
    setTimeout(() => {    //simulates loading in more user data for the match
      this.setState({
        loading: false
      })
    }, 3000)
  }

  render(){
    const { opponent } = this.props
    // console.log(opponent)
    if(this.state.loading) return <Loading />
    return (
      <View style={styles.imgContainer}>
        <BackButton navigation={this.props.navigation}/>
        <View style={styles.textContainer}>
          <Text>{`You are battling ${opponent.firstName}.`}</Text>
        </View>
        <Image source={{uri: opponent.avatar}} style={styles.img}/>
      </View>
    )  
  }
}

const mapStateToProps = ({ players }, ownProps) => {
  const { navigation } = ownProps
  return {
    opponent: findUser(navigation.getParam('userId'), players) //filters out the user you're currently battling 
  }
}

export default connect(mapStateToProps, null)(BattleView)