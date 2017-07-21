import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
           add(){
               this.counter++;
                this.store.createRecord('todo',
                {id:this.counter,task:this.get("newTodo"),isDone: true,}
                );          
         }

    }
});
