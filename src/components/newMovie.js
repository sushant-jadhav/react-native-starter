import React, {Fragment,Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Alert,
    Image,
    FlatList,
    List, StatusBar, SafeAreaView
} from 'react-native';

import CustomListview from "./CustomListview";

// class NewMovie extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             movies: [{
//                 id: 1,
//                 imgsrc: 'https://img.mobiscroll.com/demos/Requiem_for_a_Dream.png',
//                 title: 'Requiem for a Dream',
//                 director: 'Darren Aronofsky'
//             }, {
//                 id: 2,
//                 imgsrc: 'https://img.mobiscroll.com/demos/The_Dark_Knight.png',
//                 title: 'The Dark Knight',
//                 director: 'Christopher Nolan'
//             }, {
//                 id: 3,
//                 imgsrc: 'https://img.mobiscroll.com/demos/Despicable_Me.png',
//                 title: 'Despicable Me',
//                 director: 'Pierre Coffin and Chris Renaud'
//             }, {
//                 id: 4,
//                 imgsrc: 'https://img.mobiscroll.com/demos/Mr_Nobody.png',
//                 title: 'Mr. Nobody',
//                 director: 'Jaco Van Dormael'
//             }],
//             icons: [{
//                 id: 1,
//                 icon: 'line-user',
//                 name: 'Edit profile'
//             }, {
//                 id: 2,
//                 icon: 'line-settings',
//                 name: 'Settings'
//             }, {
//                 id: 3,
//                 icon: 'line-heart',
//                 name: 'Rate'
//             }, {
//                 id: 4,
//                 icon: 'line-bubble',
//                 name: 'Tell a friend'
//             }],
//             users: [{
//                 id: 1,
//                 imgsrc: 'https://img.mobiscroll.com/demos/m1.png',
//                 user: 'Barry Lyon',
//                 phone: '(202) 555-0193'
//             }, {
//                 id: 2,
//                 imgsrc: 'https://img.mobiscroll.com/demos/f1.png',
//                 user: 'Hortense Tinker',
//                 phone: '(202) 555-0127'
//             }, {
//                 id: 3,
//                 imgsrc: 'https://img.mobiscroll.com/demos/m2.png',
//                 user: 'Carl Hambledon',
//                 phone: '(202) 555-0147'
//             }, {
//                 id: 4,
//                 imgsrc: 'https://img.mobiscroll.com/demos/f2.png',
//                 user: 'Arlene Sharman',
//                 phone: '(202) 555-0190'
//             }]
//         };
//
//
//         console.log('new movie',this.state);
//     }
//
//
//
//
//     render() {
//         return <Fragment>
//             <StatusBar barStyle="dark-content" />
//             <SafeAreaView>
//                 <ScrollView
//                     contentInsetAdjustmentBehavior="automatic"
//                     style={styles.scrollView}>
//
//
//                     <View style={styles.body}>
//
//                         {/*<LearnMoreLinks />*/}
//                     </View>
//                 </ScrollView>
//             </SafeAreaView>
//         </Fragment>;
//         ;
//     }
// };

class NewMovie extends Component {

    getData(){
        return [
                {
                    id: 1,
                    imgsrc: 'https://img.mobiscroll.com/demos/m1.png',
                    user: 'Barry Lyon',
                    phone: '(202) 555-0193'
                }, {
                    id: 2,
                    imgsrc: 'https://img.mobiscroll.com/demos/f1.png',
                    user: 'Hortense Tinker',
                    phone: '(202) 555-0127'
                }, {
                    id: 3,
                    imgsrc: 'https://img.mobiscroll.com/demos/m2.png',
                    user: 'Carl Hambledon',
                    phone: '(202) 555-0147'
                }, {
                    id: 4,
                    imgsrc: 'https://img.mobiscroll.com/demos/f2.png',
                    user: 'Arlene Sharman',
                    phone: '(202) 555-0190'
                },
                {
                    id: 5,
                    imgsrc: 'https://img.mobiscroll.com/demos/f2.png',
                    user: 'Arlene Sharman',
                    phone: '(202) 555-0190'
                },
                {
                    id: 6,
                    imgsrc: 'https://img.mobiscroll.com/demos/f2.png',
                    user: 'Shwetali Sharman',
                    phone: '(202) 555-0190'
                }
            ];
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomListview
                    itemList={this.getData()}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default NewMovie;