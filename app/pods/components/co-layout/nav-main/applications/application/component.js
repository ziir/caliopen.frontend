import NavItemComponent from '../../../../co-navigation-list-item/component';

export default NavItemComponent.extend({

    classNames: ['co-layout-nav-main-applications__application'],

    icon: null,

    click: function (e) {
      this.navigateToFirstLink(e);
    }

});