/**
 * navigation-list-item
 * ====================
 *
 * A component to generate a navigation list item.
 * If the route is active, then the list item will have an `active`
 * class.
 *
 * This is especially usefull to render [bootstrap](http://getbootstrap.com)'s
 * navs.
 *
 * Sample Tabs
 * -----------
 *
 * @@example
 * ```html
 * <ul class="nav nav-tabs">
 *   {{#navigation-list-item}}{{#link-to 'mails.index'}}mails{{/link-to}}{{/navigation-list-item}}
 *   {{#navigation-list-item}}{{#link-to 'contacts.index'}}contacts{{/link-to}}{{/navigation-list-item}}
 * </ul>
 * ```
 * @@example
 *
 * Activate For Any Child Route
 * ----------------------------
 *
 * Following example will make the navigation active when one of the view is active.
 *
 * @@example
 * ```html
 * <ul class="nav nav-tabs">
 *   {{#navigation-list-item}}
 *      {{#link-to 'mails.index'}}mails{{/link-to}}
 *      {{#link-to 'contacts.index'}}mails{{/link-to}}
 *   {{/navigation-list-item}}
 * </ul>
 * ```
 * @@example
 */
import Ember from 'ember';

export default Ember.Component.extend({

    tagName: 'li',

    classNames: [],
    classNameBindings: ['active'],

    active: function(){
        return this.get('childViews').isAny('active');
    }.property('childViews.@each.active'),

    // On click send the component action
    click: function () {
      this.sendAction();
    }
});
