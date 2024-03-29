import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('co-contact/card/icons/icon', 'CoContactCardIconsIconComponent', {
  // specify the other units that are required for this test
  needs: ['component:co-widget/icon']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  equal(component._state, 'inDOM');
});
