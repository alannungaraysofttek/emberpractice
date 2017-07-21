import Ember from 'ember';

export default Ember.Route.extend({
      model(){
        return {
            todos: this.store.findAll('todo'),
            store:this.store,
            counter:0
        }
    }
});
