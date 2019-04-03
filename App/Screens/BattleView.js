import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'

import BackButton from '../Components/BackButton'
import Loading from '../Components/Loading'

import VolleyImg from '../Assets/volley.png'

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignSelf: 'center'
  }
})

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
    }, 2000)
  }

  render(){
    if(this.state.loading) return <Loading />
    return (
      <View style={styles.imgContainer}>
        <BackButton navigation={this.props.navigation}/>
        <Image source={VolleyImg} style={styles.img}/>
      </View>
    )  
  }
}

export default BattleView