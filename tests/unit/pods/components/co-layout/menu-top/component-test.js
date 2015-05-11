import { registerIntl } from '../../../../../../initializers/ember-intl';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('co-layout/menu-top', 'CoMenuTopComponent', {
  // specify the other units that are required for this test
  needs: [
    'component:co-icon',
    'component:co-navigation-list-item',
    'adapter:-intl-adapter',
    'service:intl',
    'helper:intl-get',
    'formatter:format-message',
    'locale:en'
  ],
  setup: function () {
    // depending on your test library, container will be hanging off `this`
    // or otherwise passed in as the first argument
    var container = this.container || arguments[0];
    // injects the service on to all logical factory types
    registerIntl(container);

    // set the initial intl service locale to `en-us`
    var intl = container.lookup('service:intl');
    intl.set('locales', 'en');
  }
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});
