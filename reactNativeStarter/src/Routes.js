// Module imports
import React, {Component} from 'react'
import {StackNavigator, TabNavigator, NavigationActions, DrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
// Screen Imports
// ---------------
// Common Screen Imports
import SplashScreen from './screens/commonScreens/SplashScreen'
import StartSwipe from './screens/commonScreens/StartSwipe'
import Login from './screens/commonScreens/Login'
import Signup from './screens/commonScreens/Signup'
import Loading from './screens/commonScreens/LoadingScreen'

// Other Screen Imports
import Home from './screens/Home'
import Profile from './screens/Profile'
import ChatScreen from './screens/ChatScreen'

// This is for basic navigation purposes
const navigateOnce = (getStateForAction) => (action, state) => {
    const {type, routeName} = action;
    return (
      state &&
      type === NavigationActions.NAVIGATE &&
      routeName === state.routes[state.routes.length - 1].routeName
    ) ? null : getStateForAction(action, state);
};

const HomeStack = StackNavigator({
    Home: {
        screen: Home
    },
    Profile: {
        screen: Profile
    },
    ChatScreen: {
        screen: ChatScreen,
        navigationOptions: {
            title: 'Chat Screen'
        }
    }
})

const ProfileStack = StackNavigator({
    Profile: {
        screen: Profile
    }
})
// ProfileStack.router.getStateForAction = navigateOnce(ProfileStack.router.getStateForAction)

const App = DrawerNavigator({
    HomeStack: {
        screen: HomeStack,
        navigationOptions: {
            drawerLabel: "Home",
            drawerIcon: <Icon name="home" size={30} color="#000"/>
        }
    },
    ProfileStack: {
        screen: ProfileStack,
        navigationOptions: {
            drawerLabel:"Profile",
            drawerIcon: <Icon name="person" size={30} color="#000"/>
        }
    }
})


const Root = StackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
            header: null
        }
    },
    StartSwipe: {
        screen: StartSwipe,
        navigationOptions: {
            header: null
        }
    },
    Loading: {
        screen: Loading,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            header: null
        }
    },
    App: {
        screen: App,
        navigationOptions: {
            header: null
        }
    }
})

export default Root
