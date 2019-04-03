import React from 'react'
import { connect } from 'react-redux'

import { initialLoad } from '../Store/Reducers/Players'
import fakeData from '../Utility/fakeData'
import { removeStartUpFromStack } from '../Navigation/helpers'

import Loading from '../Components/Loading'

class StartUp extends React.Component{

  static navigationOptions = {
    header: null
  }

  componentDidMount(){
    this.props.loadChallenges(fakeData)  //loading our data into our redux store
    setTimeout(() => { //simulates a network request
      this.props.navigation.dispatch(removeStartUpFromStack)
    }, 2000)
  }
  
  render(){
    return (
      <Loading />
    )
  }
}

//redux mapping into component
const mapDispatchToProps = dispatch => {
  return {
    loadChallenges: users => dispatch(initialLoad(users)),
  }
}

export default connect(null, mapDispatchToProps)(StartUp)