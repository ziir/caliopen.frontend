import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  icon: null,

  classNames: [],
  classNameBindings: ['iconClass'],

  iconClass: Ember.computed('icon', {
    get: function () {
      if (!this.get('icon')) {
        return '';
      }

      return `glyphicon glyphicon-${this.get('icon')}`;
    }
  })
});
