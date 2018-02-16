import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

const Button = ({onPress, children, backgroundColor, color, fontSize, paddingHorizontal, paddingVertical, borderRadius}) => (
        <TouchableOpacity 
            style={{backgroundColor, paddingHorizontal, paddingVertical, borderRadius, justifyContent: 'center', alignItems: 'center'}} 
            onPress={onPress}>
            <Text style={{color, fontSize}}>
                {children}
            </Text>
        </TouchableOpacity>
);

Button.defaultProps = {
    backgroundColor: '#ffd34b',
    color : '#fff',
    fontSize:20,
    paddingHorizontal: 20,
    paddingVertical: 10,
}

export default Button