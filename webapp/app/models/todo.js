import DS from 'ember-data';

export default DS.Model.extend({
  order: DS.attr('string'),
  task: DS.attr('string'),
    isOnEdit: DS.attr('boolean'),
  isActive: DS.attr('number'),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
