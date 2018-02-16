import React, {Component} from 'react'; 
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper'

class StartSwipe extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Swiper style={styles.wrapper} showsButtons={true} loop={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Welcome to "APP_NAME" app</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Feature 1</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>Feature 2</Text>
                </View>
            </Swiper>
        );
    }
}

var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  })

export default StartSwipe