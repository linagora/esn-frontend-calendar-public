'use strict';

angular.module('esn.calendar.event-consultation')
  .component('calEventExternalErrorDisplay', {
    bindings: {
      error: '<',
    },
    controllerAs: 'ctrl',
    template: require('./error-display.pug'),
  });

