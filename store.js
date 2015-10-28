'use strict';

import { createStore, applyMiddleware, } from 'redux';

import { combineReducers, } from 'redux-immutable';

import thunk from 'redux-thunk';

import * as reducers from './reducers';

import Immutable from 'immutable';

import _ from 'lodash';

let reducer,
    store;

reducer = combineReducers(reducers);

store = applyMiddleware(
  thunk,
)(createStore)(reducer, Immutable.fromJS({}));

export default store;
