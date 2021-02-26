import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Product from '../screens/Product';

const Stack = createStackNavigator();

function  RootNativation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Product" component={Product} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNativation;