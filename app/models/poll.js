import Ember from 'ember';

export default Ember.Object.extend({
  voteCount: Ember.computed.alias('votes.length')
});
