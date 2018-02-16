import React, {Component} from 'react'; 
import {
    View,
    Text,
    Dimensions
} from 'react-native';


class Card extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {height,width} = Dimensions.get('window')
        let marginTop = this.props.first ? height/7 : height/20
        return (
            <View style={{...styles.container, marginHorizontal:width/10, width: 4* width/5, marginTop}}>
                {this.props.children}
            </View>
        );
    }
}

const styles ={
    container : {
        backgroundColor:'white',
        shadowColor: '#9c9c9c',
        shadowOffset: {width:10, height:10},
        shadowOpacity: 2,
        shadowRadius: 5
    }
}

export default Card