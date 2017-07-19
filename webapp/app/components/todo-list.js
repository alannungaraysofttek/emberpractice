import Ember from 'ember';

export default Ember.Component.extend({
        actions:{
        activeEdit(item){
            let todoEdit =this.get("list").findBy("id",item.id)        
            todoEdit.isOnEdit=true;
            console.log(todoEdit);
            console.log(this.get("list"))
        },
        edit(item){            
        },
        remove(){            
            let todoEdit =this.get("list").removeObject();      
            console.log(todoEdit);
            console.log(this.get("list"))     
        }
    }
});
