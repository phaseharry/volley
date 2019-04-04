import { StyleSheet } from 'react-native'

const UserListStyles = StyleSheet.create({
  userItem: {
    padding: 10,
    height: 44,
    flexDirection: 'row',
  },
  sectionText: {
    fontSize: 16
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

export default UserListStyles