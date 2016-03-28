import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  options: DS.hasMany('option', { async: false }),
  prompt: DS.attr('string'),
  votes: DS.hasMany('vote', { async: false }),

  voteCount: Ember.computed.alias('votes.length')
});
