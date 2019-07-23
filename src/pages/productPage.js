import React, {Fragment,Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    SectionList,
    FlatList,
    ActivityIndicator
} from 'react-native';
import fetchProductsAction from "../components/product/fetchProducts";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getProductsError, getProducts, getProductsPending} from '../reducers';

import { ListItem } from 'react-native-elements';

class ProductPage extends Component {

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
                                        leftAvatar={{ source: { uri: '' } }}
                                        rightIcon={{ name:item.is_checked === 0?'add':'checked' }}
                                        onPress = {()=>(console.log(item.id))}
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
                        // }
                //         {
                //     <SectionList
                //     renderItem={({item, index, section}) => <ListItem
                //     title={item.product_name}
                //     subtitle={item.product_name}
                //     leftAvatar={{source: {uri: ''}}}
                // />}
                //     renderSectionHeader={({section: {category_name}}) => (
                //     <Text style={{fontWeight: 'bold'}}>{category_name}</Text>
                // )}
                //     sections={[
                //     {
                //         category_name: 'Title1',
                //         data: [{'id': 1, 'product_name': 'item1'}, {'id': 2, 'product_name': 'item2'}]
                //     }
                // ]}
                //     keyExtractor={(item, index) => item + index}
                //     />
                // }
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
        padding: 10
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
)(ProductPage);