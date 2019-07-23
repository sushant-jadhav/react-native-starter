/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import AppNavigator from './src';
import {name as appName} from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import React from "react";
import { Provider } from 'react-redux';
import { applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './src/reducers';
const middleWares = [thunk];
const store = createStore(productsReducer,applyMiddleware(...middleWares));

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
    },
};

export default function Main() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <AppNavigator />
            </PaperProvider>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
