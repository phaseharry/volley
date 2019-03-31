import React from 'react'
import { View, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { handleChange } from '../Store/Reducers/Search'

//need to make a random opponent generator
//need to add an icon next to text input

//mayve navigate to the search view if the search has a value inside and pass this state down to that components search header
//use the navigation prop to get the title for the header based on the screen?
//food for thought
class SearchHeader extends React.Component{

  handleChange = search => {
    this.props.handleChange(search)
  }

  render(){
    return (
      <View>
        <TextInput 
          onChangeText={this.handleChange} 
          value={this.props.search} 
          placeholder='Find a friend'
          placeholderTextColor='gray'
        />
      </View>
    )
  }
}

const mapStateToProps = ({ search }) => {
  return {
    search  
  }
}

const mapDisatchToProps = dispatch => {
  return {
    handleChange: search => dispatch(handleChange(search))
  }
}

export default connect(mapStateToProps, mapDisatchToProps)(SearchHeader)