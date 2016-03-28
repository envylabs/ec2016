import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPoll(poll) {
      this.transitionTo('polls.poll', poll);
    }
  }
});
