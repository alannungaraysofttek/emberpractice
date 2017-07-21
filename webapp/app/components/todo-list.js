import Ember from 'ember';

export default Ember.Component.extend({
        actions:{
        activeEdit(item){    
                            console.log(this.get('store').findAll('todo'))
        },
        edit(item){            
            
        },
        remove(item){            
            this.get("store").findRecord('todo', 0, { backgroundReload: true }).then(function(todo) {
                console.log(todo)
            }); 
        }
    }
});
