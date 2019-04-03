import { StackActions, NavigationActions } from 'react-navigation'

export const removeStartUpFromStack = StackActions.reset({ //used during the inital loading screen when user starts up the app (will remove the startup loading screen from the stack so user cannot go back)
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Challenge'})]
})

