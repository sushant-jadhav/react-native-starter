import React, {Fragment,Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Platform
} from 'react-native';
import {Header} from "react-native-elements";

class SettingPage extends Component {

    render() {
        return (

            <View>
                <Header
                    // containerStyle={{'height':'40'}}
                    containerStyle={{height: Platform.OS === 'ios' ? 70 : 70 - 18,paddingTop:10}}
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <Text>Setting Page Screen</Text>
            </View>

        );
    }
};

export default SettingPage;