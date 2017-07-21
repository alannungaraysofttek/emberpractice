import Ember from 'ember';

export default Ember.Route.extend({
   beforeModel() {
    this.transitionTo('/todo'); // Implicitly aborts the on-going transition.
  }
});
