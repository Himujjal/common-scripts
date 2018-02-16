import React, {Component} from 'react'; 
import store from './redux/store'
import {Provider} from 'react-redux'
import Routes from './Routes'

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Provider store={store}>
                    <Routes/>
            </Provider>
        );
    }
}

export default App