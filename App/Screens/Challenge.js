import React from 'react'
import { connect } from 'react-redux'

import { initialLoad } from '../Store/Reducers/Players'
import fakeData from '../Utility/fakeData'

import SearchHeader from '../Components/SearchHeader'
import CurrenlyChallenging from '../Components/CurrentlyChallenging'
import OpponentSearch from '../Components/OpponentSearch'

//Shows a list of the users' current matches
//has the ability to add a new match
//Note to self: shou


class Challenge extends React.Component{
  static navigationOptions = {
    headerTitle: <SearchHeader/>
  }

  componentDidMount(){
    return this.props.loadChallenges(fakeData)  //loading our data into our redux store
  }

  isSearching = () => this.props.search? true : false   //checks if there's user input in the search bar. If there is then render the opponent search component else we just show players they're currently challenging

  render(){
    if(this.isSearching()){
      return <OpponentSearch />
    } else {
      return <CurrenlyChallenging />
    }
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
    loadChallenges: users => dispatch(initialLoad(users))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge)