import { StyleSheet, Dimensions } from 'react-native'

const searchStyles = StyleSheet.create({
  headerContainer: {
    flex: 1,
  }, 
  searchBackground: {
    height: 80,
    backgroundColor: '#4da6ff',
    justifyContent: 'center',
    paddingHorizontal: 5
  },  
  searchContainer: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 5 ,
    borderRadius: 10
  },
  searchIcon:{
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#3385ff'
  },
  input: {
    backgroundColor: '#fff',
    color: 'black',
    width: Dimensions.get('window').width * 0.8,
  },
  randomContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  battleIcon: {
    paddingLeft: 20,
    paddingRight: 15,
    color: 'yellow'
  },
  randomText: {
    fontSize: 13,
    fontWeight: 'bold'
  }
})

export default searchStyles