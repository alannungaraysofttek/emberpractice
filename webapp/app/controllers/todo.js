import Ember from 'ember';

export default Ember.Controller.extend({
    model(){
        return {
            todos:[{id:1,task:""}],
            newTodo:{id:2,task:""}
        }
    },
      actions: {
    reorderItems(itemModels, draggedModel) {
      this.set('currentModel.todos', itemModels);
      this.set('currentModel.justDragged', draggedModel);
    },
    add(){
        console.log(this.model.newTodo)

        this.get('todos').push(this.model.newTodo)           
        this.set('newTodo',{task:"",id:this.model.newTodo.id+1});


        
    }
  }
});
