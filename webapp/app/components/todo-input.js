import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
           add(){
               this.counter++;
               this.get("list").pushObject({id:this.counter,task:this.get("newTodo")});
               this.set("newTodo","");
            }

    }
});
