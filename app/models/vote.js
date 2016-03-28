import DS from 'ember-data';

export default DS.Model.extend({
  fakeAttrForMirage: DS.attr('string'),
  option: DS.belongsTo('option', { async: false }),
  poll: DS.belongsTo('poll', { async: false }),

  toggleOption(option) {
    if (this.get('option') === option) {
      option = null;
    }

    this.set('option', option);
  }
});
