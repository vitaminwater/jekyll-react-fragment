'use strict';

export default (state) => {
  return {
    n: state.getIn(['foo', 'n']),
  };
};
