import Ember from 'ember';

export default Ember.Route.extend({
      model(){
        return {
            todos: Ember.A(),
            counter:0
        }
    }
});
