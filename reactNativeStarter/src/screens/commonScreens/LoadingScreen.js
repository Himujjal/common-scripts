// Check if authenticated or not or having internet or not. 
import React, {Component} from 'react'; 
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Spinner from 'react-native-spinkit'
import {NavigationActions} from 'react-navigation'

class LoadingScreen extends Component{
    constructor(props){
        super(props);
    }
    _replaceScreen (screen) {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: screen})
            ]
        })
        this.props.navigation.dispatch(resetAction);
    }

    _checkUserAuth(){
        return true
    }

    componentDidMount(){
        setTimeout(()=>{
            if(this._checkUserAuth() === true ) this._replaceScreen('App')
            else this._replaceScreen('Login')
         }, 1000);
    }

    render(){
        return (
            <View style={styles.container}>
                <Spinner type='9CubeGrid' size={100} color={'#fff'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
});

export default LoadingScreen