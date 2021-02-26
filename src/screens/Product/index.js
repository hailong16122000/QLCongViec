import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Products() {
    return (
        <View style={styles.waper}>
            <Text>"Hello to my world!!!"-Truongnd</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    waper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#9932cc',
    }
})

export default Products;