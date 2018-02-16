import React, {Component} from 'react'; 
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {H4} from '../components/Heading'
import Icon from 'react-native-vector-icons/MaterialIcons'

const MenuIcon = ({navigation}) => (
    <TouchableOpacity onPress={()=>navigation.goBack(null)} style={{paddingLeft:10}}>
        <Icon name="arrow-back" size={30} color="#000"/>
    </TouchableOpacity>
)

class Profile extends Component{
    constructor(props){
        super(props);
    }

    static navigationOptions = ({navigation}) => ({
        title: 'Profile',
        headerLeft: <MenuIcon navigation={navigation}/>,
        headerStyle: {
            shadowOpacity: 0,
            elevation: 0
        }      
    })

    render(){
        return (
            <View style={styles.container}>
                <H4>Profile Section</H4>   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
});

export default Profile