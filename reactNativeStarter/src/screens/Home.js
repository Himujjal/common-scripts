import React, {Component} from 'react'; 
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import Button from '../components/Button'
import Card from '../components/Card'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {TabNavigator} from 'react-navigation'
import GetMotivated from './GetMotivated'
import RecentChats from './RecentChats'
import {changeHomeHeaderBkg} from '../redux/actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    bkg: state.homeHeadBkg
})

const mapDispatchToProps = (dispatch) => ({
    changeHomeHeaderBkg: (bkg) => dispatch(changeHomeHeaderBkg(bkg))
})

const MenuIcon = ({navigate}) => (
    <TouchableOpacity onPress={()=>navigate('DrawerOpen')} style={{paddingLeft:10}}>
        <Icon name="menu" size={30} color="#fff"/>
    </TouchableOpacity>
)

const ProfileIcon = ({navigate}) => (
    <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>navigate('Profile')} style={{marginHorizontal:10}}>
            <Icon name="person" size={30} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('ChatScreen')} style={{marginHorizontal:10}}>
            <Icon name="chat" size={30} color="#fff"/>
        </TouchableOpacity>
    </View>
)

let Tabs = TabNavigator({
    GetMotivated : {screen: GetMotivated},
    RecentChats : {screen: RecentChats}
})


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            navigation: this.props.navigation
        }
    }

    static navigationOptions = ({navigation}) => ({
        title: 'Precious',
        headerLeft: <MenuIcon navigate={navigation.navigate}/>,
        headerStyle: {
            shadowOpacity: 0,
            elevation: 0,
            backgroundColor: 'transparent',
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0
        },
        headerTitleStyle: {color:'#fff'},
        headerRight: <ProfileIcon navigate={navigation.navigate}/>
    })

    _onScroll(e){
        let currentOffset = e.nativeEvent.contentOffset.y
        if(currentOffset>50) this.props.changeHomeHeaderBkg('white')
    }

    render(){
        let nav = this.props.navigation.navigate;
        return (
            <View style={styles.container}>
                <Image 
                source={require('../images/background.jpg')} 
                style={{justifyContent: 'center', width:'100%', height:'100%', position:'absolute', flex:1}}/>
                <ScrollView scrollsToTop onScroll={(e)=>this._onScroll(e)}>
                    <Card first>
                        <Image source={require('../images/motivation.jpg')}/>
                    </Card>   
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)