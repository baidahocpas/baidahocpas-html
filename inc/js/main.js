/*global angular*/
'use strict';

angular
.module('acctApp', [
  'firebase',
  'ui.router',
])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': {
          templateUrl: 'pg/views/home/index.html',
          controller: 'homeCtrl',
        },
        'contactBanner@home': {
          templateUrl: 'pg/templates/contactBanner.html',
          controller: 'homeCtrl',
        },
        'contentA@home': {
          templateUrl: 'pg/views/home/contentA.html',
          controller: 'homeCtrl',
        },
        'contentB@home': {
          templateUrl: 'pg/views/home/contentB.html',
          controller: 'homeCtrl',
        },
        'contentC@home': {
          templateUrl: 'pg/views/home/contentC.html',
          controller: 'homeCtrl',
        },
        'footer@home': {
          templateUrl: 'pg/templates/footer.html',
          controller: 'homeCtrl',
        },
        'header@home': {
          templateUrl: 'pg/views/home/header.html',
          controller: 'homeCtrl',
        },
        'map@home': {
          templateUrl: 'pg/views/home/map.html',
          controller: 'homeCtrl',
        },
        'navbar@home': {
          templateUrl: 'pg/templates/navbar.html',
          controller: 'homeCtrl',
        },
      },
    })
    .state('contact', {
      url: '/contact',
      views: {
        '': {
          templateUrl: 'pg/views/contact/index.html',
          controller: 'contactCtrl',
        },
        'address@contact': {
          templateUrl: 'pg/views/contact/address.html',
          controller: 'contactCtrl',
        },
        'contactBanner@contact': {
          templateUrl: 'pg/templates/contactBanner.html',
          controller: 'contactCtrl',
        },
        'footer@contact': {
          templateUrl: 'pg/templates/footer.html',
          controller: 'contactCtrl',
        },
        'form@contact': {
          templateUrl: 'pg/views/contact/form.html',
          controller: 'contactCtrl',
        },
        'header@contact': {
          templateUrl: 'pg/views/contact/header.html',
          controller: 'contactCtrl',
        },
        'map@contact': {
          templateUrl: 'pg/views/contact/map.html',
          controller: 'contactCtrl',
        },
        'navbar@contact': {
          templateUrl: 'pg/templates/navbar.html',
          controller: 'contactCtrl',
        },
      },
    })
    .state('services', {
      url: '/services',
      views: {
        '': {
          templateUrl: 'pg/views/services/index.html',
          controller: 'servicesCtrl',
        },
        'contactBanner@services': {
          templateUrl: 'pg/templates/contactBanner.html',
          controller: 'servicesCtrl',
        },
        'footer@services': {
          templateUrl: 'pg/templates/footer.html',
          controller: 'servicesCtrl',
        },
        'header@services': {
          templateUrl: 'pg/views/services/header.html',
          controller: 'servicesCtrl',
        },
        'navbar@services': {
          templateUrl: 'pg/templates/navbar.html',
          controller: 'servicesCtrl',
        },
        'table@services': {
          templateUrl: 'pg/views/services/table.html',
          controller: 'servicesCtrl',
        },
      },
    })
    .state('success', {
      url: '/success',
      views: {
        '': {
          templateUrl: 'pg/views/success/index.html',
          controller: 'successCtrl',
        },
        'contactBanner@success': {
          templateUrl: 'pg/templates/contactBanner.html',
          controller: 'successCtrl',
        },
        'footer@success': {
          templateUrl: 'pg/templates/footer.html',
          controller: 'successCtrl',
        },
        'header@success': {
          templateUrl: 'pg/views/success/header.html',
          controller: 'successCtrl',
        },
        'message@success': {
          templateUrl: 'pg/views/success/message.html',
          controller: 'successCtrl',
        },
        'navbar@success': {
          templateUrl: 'pg/templates/navbar.html',
          controller: 'successCtrl',
        },
      },
    })
    .state('values', {
      url: '/values',
      views: {
        '': {
          templateUrl: 'pg/views/values/index.html',
          controller: 'valuesCtrl',
        },
        'contactBanner@values': {
          templateUrl: 'pg/templates/contactBanner.html',
          controller: 'valuesCtrl',
        },
        'footer@values': {
          templateUrl: 'pg/templates/footer.html',
          controller: 'valuesCtrl',
        },
        'header@values': {
          templateUrl: 'pg/views/values/header.html',
          controller: 'valuesCtrl',
        },
        'navbar@values': {
          templateUrl: 'pg/templates/navbar.html',
          controller: 'valuesCtrl',
        },
      },
    })
    .state('login', {
      url: '/login',
      views: {
        '': {
          templateUrl: 'pg/views/auth/login.html',
          controller: 'authCtrl',
        },
      },
    })
    .state('register', {
      url: '/register',
      views: {
        '': {
          templateUrl: 'pg/views/auth/register.html',
          controller: 'authCtrl',
        },
      },
    });

  $urlRouterProvider.otherwise('/');
})
.run(function ($rootScope) {
  // On state change, scroll to top
  // http://stackoverflow.com/a/22420145/5623385
  $rootScope.$on('$stateChangeSuccess',function(){
    $("html, body").animate({ scrollTop: 0 }, 0);
  });
})
.constant('FirebaseUrl', 'https://workoutlog-3b5af.firebaseio.com')
.constant('NAV_LINKS', {
  internal: [
    {
      name: 'Home',
      sref: 'home',
    },
    {
      name: 'Services',
      sref: 'services',
    },
    {
      name: 'Values',
      sref: 'values',
    },
    {
      name: 'Contact',
      sref: 'contact',
    },
  ],
  otherInternal: [
    {
      name: 'Forms',
      sref: '',
    },
  ],
  external: [
    {
      name: 'IRS',
      href: 'https://www.irs.gov/',
    },
    {
      name: 'QuickBooks Online',
      href: 'https://qbo.intuit.com/qbo36/login',
    },
  ],
});
