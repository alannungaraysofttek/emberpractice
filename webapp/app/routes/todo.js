import Ember from 'ember';

export default Ember.Route.extend({
      model(){
        return {
            todos:[{id:1,task:"asdf"}],
            newTodo:{id:2,task:""}
        }
    }
});
