import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
           add(){
               var todo=  this.store.createRecord('todo',
                {task:this.get("newTodo"),isDone: true,}
                );
                todo.save();
                this.set("newTodo","")
         }

    }
});
