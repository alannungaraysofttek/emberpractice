import Ember from 'ember';

export default Ember.Component.extend({
        actions:{
        activeEdit(item){
         this.get('store').findRecord('todo', item.id).then(function(todo) {
        // ...after the record has loaded
            todo.set('isOnEdit', true);
          });
        },
        saveEdit(item){
          console.log(item)
            this.get('store').findRecord('todo', item.id).then(function(todo) {
        // ...after the record has loaded
            todo.set('isOnEdit', false);
            todo.save();
          });


        },
        remove(item){
            this.get("store").findRecord('todo', item.id).then(function(todo) {
                 todo.destroyRecord();
            });
        }
    }
});
