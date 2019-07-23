import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomeRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

console.log('test','custom')

const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
            data={itemList}
            renderItem={({ item }) => <CustomRow
                title={item.product_name}
                description={item.product_name}
                image_url={''}
            />}
            keyExtractor={(item) => item.id.toString() }
        />

    </View>
);

export default CustomListview;