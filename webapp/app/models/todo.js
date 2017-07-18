import DS from 'ember-data';

export default DS.Model.extend({
  order: DS.attr('string'),
  task: DS.attr('string'),
  isActive: DS.attr('number')
});
