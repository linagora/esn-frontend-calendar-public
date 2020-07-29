'use strict';

angular.module('esn.calendar.event-consultation')
  .config(routesConfig);

function routesConfig($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    template: require('./event-external-root.pug'),
    controller: 'CalEventExternalRootController',
    controllerAs: 'ctrl',
    resolve: {
      result: /* @ngInject */ function($route, calEventExternalRootService) {
        if (!$route.current.params.jwt) {
          return Promise.resolve({
            error: {
              code: 400,
              message: 'Bad Request',
              details: 'jwt parameter not found'
            }
          });
        }

        return calEventExternalRootService.changeParticipation($route.current.params.jwt);
      }
    }
  });
}

require('./event-external-root.service.js');
