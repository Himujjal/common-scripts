import React, {Component} from 'react'; 
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


class GetMotivated extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../images/motivation.jpg')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
});

export default GetMotivated