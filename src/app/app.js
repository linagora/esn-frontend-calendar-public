'use strict';

angular.module('esn.calendar.event-consultation', [
  'AngularJstz',
  'ngRoute',
  'ngSanitize',
  'esn.avatar',
  'esn.core',
  'esn.calendar',
  'esn.resource.libs',
  'esn.calMoment',
  'esn.constants',
  'esn.core',
  'esn.cache',
  'esn.header',
  'esn.http',
  'esn.i18n',
  'esn.ical',
  'esn.lodash-wrapper',
  'esn.notification',
  'esn.object-type',
  'esn.user',
  'esn.url',
  'mgcrea.ngStrap.popover',
  'ngSanitize',
  'op.dynamicDirective',
  'restangular',
  'ngPromiseExtras',
  'uuid4',
  'openpaas-logo'
]);

require('esn-frontend-common-libs/src/frontend/js/modules/lodash-wrapper');
require('esn-frontend-calendar/src/linagora.esn.calendar/app/app');

require('./event-external-root/event-external-root.config.js');
require('./event-external-root/event-external-root.controller.js');
require('./event-view-external/event-view-external.controller.js');
require('./event-view-external/event-view-external.component.js');
require('./error-display/error-display.component.js');
require('./app.config.js');
require('./app.run.js');

