# Volley 

## Project created with React Native CLI

### Start Up Guide
1) npm install
2) react-native run-android or react-native run-ios

### Structure

- Our navigation is managed by React-Navigation. It is currently made up by a single stack navigator which navigates between our 
  Initial Loading View, Challenge View (renders either players we're currently challenging or players we're searching for)
- Our state is managed by redux with a little help from react-redux to pass data into our Views and Components. 
  Currently, there is only an Auth reducer and a Players reducer with hardcoded data in and a Search reducer to handle user queries for opponents.
- There's a utility folder that holds utility functions, styles folders that hold all of our small app's styling 
- Project was mainly developed on a Motorola Moto G (3 Gen) and a iPhone 7, thus the styling might not be responsive to other resolutions
