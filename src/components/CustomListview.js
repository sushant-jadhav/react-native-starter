import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './customRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
            data={itemList}
            renderItem={({ item }) => <CustomRow
                title={item.user}
                description={item.phone}
                image_url={item.imgsrc}
            />}
            keyExtractor={(item) => item.id.toString() }
        />

    </View>
);

export default CustomListview;