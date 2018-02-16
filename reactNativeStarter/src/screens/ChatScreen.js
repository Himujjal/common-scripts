import React, {Component} from 'react'; 
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {NavigationActions} from 'react-navigation'
import {H4} from '../components/Heading'
import Button from '../components/Button'

class ChatScreen extends Component{
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

    render(){
        return (
            <View style={styles.container}>
                <Button
                    onPress={()=>this._replaceScreen('Home')}>
                    Go to Home
                </Button> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
});

export default ChatScreen