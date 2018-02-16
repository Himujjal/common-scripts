import React, {Component} from 'react'; 
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {H4} from '../components/Heading'

class RecentChat extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <H4>recent Chats</H4>      
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
});

export default RecentChat