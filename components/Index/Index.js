/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { incAction } from '../../actions';

import selectors from '../../selectors/foo';

function Index({ debug, dispatch, n }) {
  return (
    <div>hello world pouet {n}<a onClick={() => dispatch(incAction())}>inc</a></div>
  );
}

Index.propTypes = {
  dispatch: PropTypes.func.isRequired,
  n: PropTypes.number.isRequired,
};

export default connect(selectors)(Index);
