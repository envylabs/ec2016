import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    castVote() {
      this.transitionTo('polls.poll.results');
    }
  }
});
