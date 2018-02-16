import React, {Component} from 'react'; 
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import {NavigationActions} from 'react-navigation'

class SplashScreen extends Component{
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

    componentDidMount(){       
        setTimeout(()=>this._replaceScreen('Loading'), 1000);
    }

    render(){
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#000'} />
                <Image source={require('../../images/precious.png')}/>
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

export default SplashScreen