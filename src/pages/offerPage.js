import React, {Fragment,Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    SectionList,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    Image
} from 'react-native';
import fetchProductsAction from "../components/product/fetchProducts";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getProductsError, getProducts, getProductsPending} from '../reducers';

import {ListItem, Button, Icon, Input, Header} from 'react-native-elements';

import CustomListview from "../components/item/CustomListView";
import CustomRow from "../components/item/CustomeRow";

class OfferPage extends Component {

    constructor(props){
        super(props);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
        this.onCheckItem = this.onCheckItem.bind(this);
    }
    componentWillMount() {
        const {fetchProducts} = this.props;
        fetchProducts();
    }

    shouldComponentRender() {

        const {pending} = this.props;
        if(pending === false) return false;
        // more tests
        console.log(this.props);
        return true;
    }

    onCheckItem(item){

    }

    render() {
        const {products, error, pending} = this.props;

        if(this.shouldComponentRender()){
            return <View style={[loader_styles.container, loader_styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        }
        return (

            <View style={{ flex: 1 }}>
                {
                    !this.shouldComponentRender() ?

                        // {
                        <SectionList
                            renderItem={({item, index, section}) => (

                                <ListItem
                                topDivider={true}
                                title={item.product_name}
                                subtitle={item.product_name}
                                leftAvatar={{ rounded: false, source: require('../assets/person_3.jpg')}}
                                rightIcon={
                                    <View style={loader_styles.horizontal}>
                                        <Button
                                            buttonStyle={loader_styles.buttonNewStyle}
                                            titleStyle={loader_styles.titleStyle}
                                            type="outline"
                                            onPress={() => console.log('puff')}
                                            title={"Subscribe"}
                                        />
                                        <Button
                                            buttonStyle={loader_styles.buttonNewStyle}
                                            type="outline"
                                            titleStyle={loader_styles.titleStyle}
                                            onPress={() => console.log('puff')}
                                            title={"Order"}
                                        />
                                    </View>
                                }
                                onPress = {() => (console.log(item.id))}
                                />



                            )}
                            renderSectionHeader={({section: {category_name}}) => (
                                <ListItem
                                    title={category_name}
                                    titleStyle={{ color: '#0000ff', fontWeight: 'bold', alignItems: "center", justifyContent: "center" }}
                                />
                            )}
                            sections={products}
                            keyExtractor={(item, index) => item + index}
                            stickySectionHeadersEnabled={true}
                        />

                        : null

                }



            </View>

        );
    }
};

const loader_styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 1
    },
    myButton:{
        // padding: 2,
        height: 30,
        width: 30,  //The Width must be the same as the height
        borderRadius:50, //Then Make the Border Radius twice the size of width or Height
        // backgroundColor:'rgb(195, 125, 198)',
        margin:5
    },
    buttonStyle:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:30,
        height:30,
        backgroundColor:'#fff',
        borderRadius:15,
    },
    buttonNewStyle:{
        margin:3
    },
    titleStyle:{
        fontSize:12
    }
})

const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProductsAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferPage);