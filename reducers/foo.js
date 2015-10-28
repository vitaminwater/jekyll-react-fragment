'use strict';

import Immutable from 'immutable';

let CONSTRUCT = () => Immutable.fromJS({n: 0});

let INC = (domain, action) => domain.set('n', domain.get('n') + 1);

export {
  CONSTRUCT,
  INC
};
