'use strict';

const _ = require('lodash');

angular
  .module('esn.calendar.event-consultation')
  .controller('CalEventViewExternalController', CalEventViewExternalController);

function CalEventViewExternalController(CalendarShell) {
  var self = this;

  self.$onInit = $onInit;

  function $onInit() {
    self.event = CalendarShell.from(self.eventJcal);
    self.externalAttendee = _.find(self.event.attendees, {
      email: self.attendeeEmail
    });
  }
}
