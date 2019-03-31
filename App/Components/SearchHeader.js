import React from 'react'
import { View, TextInput } from 'react-native'

//need to make a random opponent generator
//need to add an icon next to text input

//mayve navigate to the search view if the search has a value inside and pass this state down to that components search header
//use the navigation prop to get the title for the header based on the screen?
//food for thought
class SearchHeader extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
  }

  handleTextChange = search => this.setState({ search })
  render(){
    return (
      <View>
        <TextInput 
          onChangeText={this.handleTextChange} 
          value={this.state.search} 
          placeholder='Find a friend'
          placeholderTextColor='gray'
        />
      </View>
    )
  }
}

export default SearchHeader