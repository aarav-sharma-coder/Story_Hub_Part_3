import* as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import { DrawerNavigator } from 'react-navigation'
import WriteScreens from '../screens/WriteScreens'
import ReadScreens from '../screens/ReadScreens';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteScreens},
  Read: {screen: ReadScreens},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "Read"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)

      }
    }
  })
}
);


const AppContainer =  createAppContainer(TabNavigator);

