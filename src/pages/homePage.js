import React, {Fragment,Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity, Dimensions, YellowBox
} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import Icon from 'react-native-vector-icons/MaterialIcons';

import NewMovie from '../components/newMovie';

const {
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');


const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
const images = {
    background: require('../assets/img5.jpg'), // Put your own image here
};

import { ListItem,Header } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
    },
    navContainer: {
        height: HEADER_HEIGHT,
        marginHorizontal: 10,
    },
    statusBar: {
        height: STATUS_BAR_HEIGHT,
        backgroundColor: 'transparent',
    },
    navBar: {
        height: NAV_BAR_HEIGHT,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});


const renderNavBar = () => (
    <View style={styles.navContainer}>
        <View style={styles.statusBar} />
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.iconLeft} onPress={() => {console.log('test')}}>
                <Icon name="add" size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconRight} onPress={() => {console.log('test')}}>
                <Icon name="search" size={25} color="#fff" />
            </TouchableOpacity>
        </View>
    </View>
)

class HomePage extends Component {

    constructor(props){
        super(props);

        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'First' },
                { key: 'second', title: 'Second' },
            ],
        };

        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
    }

    renderContent(){
        return <NewMovie/>;
    }


    render() {
        return (

            <View style={styles.container}>

                <ReactNativeParallaxHeader
                    headerMinHeight={HEADER_HEIGHT}
                    headerMaxHeight={200}
                    extraScrollHeight={20}
                    navbarColor="#3498db"
                    title="Parallax Header "
                    titleStyle={styles.titleStyle}
                    backgroundImage={images.background}
                    backgroundImageScale={1.2}
                    renderNavBar={renderNavBar}
                    renderContent={this.renderContent}
                    containerStyle={styles.container}
                    contentContainerStyle={styles.contentContainer}
                    innerContainerStyle={styles.container}
                    scrollViewProps={{
                        onScrollBeginDrag: () => console.log(''),
                        onScrollEndDrag: () => console.log(''),
                    }}
                />
            </View>

        );
    }
};

export default HomePage;