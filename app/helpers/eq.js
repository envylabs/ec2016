import Ember from 'ember';

export function eq([ value1, value2 ]) {
  return value1 === value2;
}

export default Ember.Helper.helper(eq);
