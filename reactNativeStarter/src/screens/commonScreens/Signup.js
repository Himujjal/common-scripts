import React, {Component} from 'react'; 
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import {NavigationActions} from 'react-navigation'
import Button from '../../components/Button'
import {H6} from '../../components/Heading'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        }
    }

    _replaceScreen (screen) {
        console.log(screen)
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: screen})
            ]
        })
        this.props.navigation.dispatch(resetAction);
    }

    _formValidation(email, password){
        let valid = true
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            valid = false
            this.setState({emailError: 'Please Enter a valid E-Mail address'})        
        }
        if(password.length < 8)  {
            this.setState({passwordError: 'Password must be at least 8 characters long'})      
            valid = false  
        }
        return valid
    }

    _submitForm(email, password){
        // This is where you will be submitting your form and verifying with the backend
        if(this._formValidation(this.state.email, this.state.password)){
            // Go on submitting the form

            // Redirect to Home Page
            this._replaceScreen('App')
        } 
    }

    render(){
        return (            
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
                <View style={{backgroundColor:'black'}}>
                    <Image source={require('../../images/precious.png')} style={{height:80,width: 200}}/>
                </View>
                <Text style={{marginBottom:30}}>Sign Up to enter a new realm</Text>
                <View >
                    <TextInput
                        placeholder={'E-Mail'}
                        style={{width:250}}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />
                    <Text style={{color:'red'}}>{this.state.emailError}</Text>
                    <TextInput
                        style={{width:250}}
                        placeholder={'Password'}
                        secureTextEntry
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                    <Text style={{color:'red'}}>{this.state.passwordError}</Text>
                </View>                    
                <Button onPress={()=>this._submitForm()} borderRadius={5}>
                    Log in
                </Button>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                    <H6>
                        {`

Already have an account? Simply log in!

                        `}
                    </H6>
                </TouchableOpacity>
                <View>                
                    <Text>----------------- OR ----------------</Text>
                </View>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <TouchableOpacity>
                        <Image source={require('../../images/facebook-login.png')} style={styles.facebook}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../images/google-login.png')} style={styles.google}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    facebook: {
        width: 140,
        height: 80
    },
    google: {
        width: 120,
        height: 40
    }
}

export default Login