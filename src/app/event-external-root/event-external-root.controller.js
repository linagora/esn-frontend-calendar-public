'use strict';

angular.module('esn.calendar.event-consultation')
  .controller('CalEventExternalRootController', CalEventExternalRootController);

function CalEventExternalRootController($scope, result) {
  const self = this;

  if (result.error) {
    self.error = result.error;
  } else {
    self.eventJcal = result.eventJSON;
    self.attendeeEmail = result.attendeeEmail;
    self.links = result.links;
  }
}
