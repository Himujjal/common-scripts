import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

const H1 = ({style,children}) => (<Text style={{...style, fontSize:40, fontWeight:'bold'}}>{children}</Text>) 
const H2 = ({style,children}) => (<Text style={{...style, fontSize:35, fontWeight:'bold'}}>{children}</Text>)
const H3 = ({style,children}) => (<Text style={{...style, fontSize:30, fontWeight:'bold'}}>{children}</Text>)
const H4 = ({style,children}) => (<Text style={{...style, fontSize:25, fontWeight:'bold'}}>{children}</Text>)
const H5 = ({style,children}) => (<Text style={{...style, fontSize:20, fontWeight:'bold'}}>{children}</Text>)
const H6 = ({style,children}) => (<Text style={{...style, fontSize:15, fontWeight:'bold'}}>{children}</Text>)

export {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6
}