import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';
import * as asyncInitialState from 'redux-async-initial-state';
import rootReducer from '../reducers';

// Initialize storage as global variable
global.storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
});

const navMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                navMiddleware,
                promiseMiddleware
            ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    if (module.hot) {
        // Enable webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
